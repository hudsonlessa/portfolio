import * as THREE from 'three';

const LongRaceUniforms = {
  uFreq: new THREE.Uniform(new THREE.Vector2(2, 3)),
  uAmp: new THREE.Uniform(new THREE.Vector2(35, 10)),
};

const LongRaceDistortion = {
  uniforms: LongRaceUniforms,
  getDistortion: `

        uniform vec2 uFreq;
        uniform vec2 uAmp;
            #define PI 3.14159265358979

            vec3 getDistortion(float progress){

                float camProgress = 0.0125;
                return vec3(
                  sin(progress * PI * uFreq.x +uTime) * uAmp.x - sin(camProgress * PI * uFreq.x+uTime ) * uAmp.x,
                  sin(progress * PI * uFreq.y +uTime) * uAmp.y - sin(camProgress * PI * uFreq.y+uTime ) * uAmp.y,
                  0.
                );
              }
            `,
  getJS: (progress, time) => {
    const camProgress = 0.0125;

    const uFreq = LongRaceUniforms.uFreq.value;
    const uAmp = LongRaceUniforms.uAmp.value;

    const distortion = new THREE.Vector3(
      Math.sin(progress * Math.PI * uFreq.x + time) * uAmp.x -
        Math.sin(camProgress * Math.PI * uFreq.x + time) * uAmp.x,
      Math.sin(progress * Math.PI * uFreq.y + time) * uAmp.y -
        Math.sin(camProgress * Math.PI * uFreq.y + time) * uAmp.y,
      0
    );

    const lookAtAmp = new THREE.Vector3(1, 1, 0);
    const lookAtOffset = new THREE.Vector3(0, 0, -5);
    return distortion.multiply(lookAtAmp).add(lookAtOffset);
  },
};

export default LongRaceDistortion;
