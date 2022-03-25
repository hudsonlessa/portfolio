import { createGlobalStyle } from 'styled-components';

import BebasNeueRegular from '../assets/fonts/BebasNeue-Regular.ttf';
import RalewayBold from '../assets/fonts/Raleway-Bold.ttf';
import RalewayRegular from '../assets/fonts/Raleway-Regular.ttf';

export default createGlobalStyle`
@font-face {
  font-family: "Azo Sans Uber";
  src: url("https://use.typekit.net/af/e93b2b/00000000000000007735a2d1/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),
    url("https://use.typekit.net/af/e93b2b/00000000000000007735a2d1/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),
    url("https://use.typekit.net/af/e93b2b/00000000000000007735a2d1/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
}

@font-face {
  font-family: "LTC Bodoni 175";
  src: url("https://use.typekit.net/af/04715e/000000000000000077359a54/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),
    url("https://use.typekit.net/af/04715e/000000000000000077359a54/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),
    url("https://use.typekit.net/af/04715e/000000000000000077359a54/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
}

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
