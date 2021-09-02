import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: "Bebas Neue";
  src: url('../assets/fonts/BebasNeue-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: "Raleway";
  src: url('../assets/fonts/Raleway-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: "Raleway";
  src: url('../assets/fonts/Raleway-Bold.ttf');
  font-weight: 700;
}

*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  line-height: 1em;
}`;
