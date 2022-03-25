import { createGlobalStyle } from 'styled-components';

import BebasNeueRegular from '../assets/fonts/BebasNeue-Regular.ttf';
import RalewayBold from '../assets/fonts/Raleway-Bold.ttf';
import RalewayRegular from '../assets/fonts/Raleway-Regular.ttf';

export default createGlobalStyle`
@font-face {
  font-family: "Bebas Neue";
  src: url(${BebasNeueRegular});
}

@font-face {
  font-family: "Raleway";
  src: url(${RalewayRegular});
}

@font-face {
  font-family: "Raleway";
  src: url(${RalewayBold});
  font-weight: 700;
}

*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  line-height: 1em;
}
`;
