import React from 'react';

import Content from './Content';
import LongRaceDistortion from './LongRaceDistortion';
import Container from './styles';

export default function InfiniteLights() {
  window.onload = () => {
    const options = {
      distortion: LongRaceDistortion,

      length: 400,
      roadWidth: 10,
      islandWidth: 5,
      lanesPerRoad: 2,

      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,

      lightPairsPerRoadWay: 70,

      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,

      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],

      carLightsLength: [400 * 0.05, 400 * 0.15],
      carLightsRadius: [0.05, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.2, 0.2],
      carFloorSeparation: [0.05, 1],

      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x151515,
        shoulderLines: 0x131318,
        brokenLines: 0x131318,

        leftCars: [0xe80cd8, 0xc819ff, 0x780ce8],
        rightCars: [0x0ce8ce, 0x00ff99, 0x0ce851],
      },
    };

    const container = document.getElementById('infinite-lights');

    const myApp = new Content(container, options);
    myApp.loadAssets().then(myApp.init);
  };

  return <Container id="infinite-lights" />;
}
