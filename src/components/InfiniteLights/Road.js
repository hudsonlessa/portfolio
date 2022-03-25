import * as THREE from 'three';

const roadBaseFragment = `
    #define USE_FOG;
    varying vec2 vUv;
    uniform vec3 uColor;
    uniform float uTime;
    #include <roadMarkingsVars>
    ${THREE.ShaderChunk.fog_pars_fragment}
    void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);

        #include <roadMarkingsFragment>

        gl_FragColor = vec4(color,1.);
        ${THREE.ShaderChunk.fog_fragment}
    }
`;

const roadMarkingsFragment = `

        uv.y = mod(uv.y + uTime * 0.1,1.);
        float brokenLineWidth = 1. / uLanes * uBrokenLinesWidthPercentage;
        // How much % of the lane's space is empty
        float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

        // Horizontal * vertical offset
        float brokenLines = step(1.-brokenLineWidth * uLanes,fract(uv.x * uLanes)) * step(laneEmptySpace, fract(uv.y * 100.)) ;
        // Remove right-hand lines on the right-most lane
        brokenLines *= step(uv.x * uLanes,uLanes-1.);
        color = mix(color, uBrokenLinesColor, brokenLines);


        float shoulderLinesWidth = 1. / uLanes * uShoulderLinesWidthPercentage;
        float shoulderLines = step(1.-shoulderLinesWidth, uv.x) + step(uv.x, shoulderLinesWidth);
        color = mix(color, uBrokenLinesColor, shoulderLines);

        vec2 noiseFreq = vec2(4., 7000.);
        float roadNoise = random( floor(uv * noiseFreq)/noiseFreq ) * 0.02 - 0.01;
        color += roadNoise;
`;

const roadMarkingsVars = `
    uniform float uLanes;
    uniform vec3 uBrokenLinesColor;
    uniform vec3 uShoulderLinesColor;
    uniform float uShoulderLinesWidthPercentage;
    uniform float uBrokenLinesWidthPercentage;
    uniform float uBrokenLinesLengthPercentage;
    highp float random(vec2 co)
    {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt= dot(co.xy ,vec2(a,b));
        highp float sn= mod(dt,3.14);
        return fract(sin(sn) * c);
    }
`;

const roadFragment = roadBaseFragment
  .replace('#include <roadMarkingsFragment>', roadMarkingsFragment)
  .replace('#include <roadMarkingsVars>', roadMarkingsVars);

const islandFragment = roadBaseFragment
  .replace('#include <roadMarkingsFragment>', '')
  .replace('#include <roadMarkingsVars>', '');

const roadVertex = `
#define USE_FOG;
uniform float uTime;
${THREE.ShaderChunk.fog_pars_vertex}

uniform float uTravelLength;

varying vec2 vUv;
  #include <getDistortion_vertex>
void main() {
  vec3 transformed = position.xyz;

    vec3 distortion  = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
    transformed.x += distortion.x;
    transformed.z += distortion.y;
  transformed.y += -1.*distortion.z;

  vec4 mvPosition = modelViewMatrix * vec4(transformed,1.);
  gl_Position = projectionMatrix * mvPosition;
  vUv = uv;

  ${THREE.ShaderChunk.fog_vertex}
}`;

export default class Road {
  constructor(webgl, options) {
    this.webgl = webgl;
    this.options = options;

    this.uTime = new THREE.Uniform(0);
  }

  createPlane(side, width, isRoad) {
    const { options } = this;
    const segments = 100;
    const geometry = new THREE.PlaneBufferGeometry(
      isRoad ? options.roadWidth : options.islandWidth,
      options.length,
      20,
      segments
    );
    let uniforms = {
      uTravelLength: new THREE.Uniform(options.length),
      uColor: new THREE.Uniform(
        new THREE.Color(
          isRoad ? options.colors.roadColor : options.colors.islandColor
        )
      ),
      uTime: this.uTime,
    };
    if (isRoad) {
      uniforms = Object.assign(uniforms, {
        uLanes: new THREE.Uniform(options.lanesPerRoad),
        uBrokenLinesColor: new THREE.Uniform(
          new THREE.Color(options.colors.brokenLines)
        ),
        uShoulderLinesColor: new THREE.Uniform(
          new THREE.Color(options.colors.shoulderLines)
        ),
        uShoulderLinesWidthPercentage: new THREE.Uniform(
          options.shoulderLinesWidthPercentage
        ),
        uBrokenLinesLengthPercentage: new THREE.Uniform(
          options.brokenLinesLengthPercentage
        ),
        uBrokenLinesWidthPercentage: new THREE.Uniform(
          options.brokenLinesWidthPercentage
        ),
      });
    }
    const material = new THREE.ShaderMaterial({
      fragmentShader: isRoad ? roadFragment : islandFragment,
      vertexShader: roadVertex,
      side: THREE.DoubleSide,
      uniforms: Object.assign(
        uniforms,
        this.webgl.fogUniforms,
        options.distortion.uniforms
      ),
    });

    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        '#include <getDistortion_vertex>',
        options.distortion.getDistortion
      );
    };
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.z = -options.length / 2;
    mesh.position.x +=
      (this.options.islandWidth / 2 + options.roadWidth / 2) * side;
    this.webgl.scene.add(mesh);

    return mesh;
  }

  init() {
    this.leftRoadWay = this.createPlane(-1, this.options.roadWidth, true);
    this.rightRoadWay = this.createPlane(1, this.options.roadWidth, true);
    this.island = this.createPlane(0, this.options.islandWidth, false);
  }

  update(time) {
    this.uTime.value = time;
  }
}
