import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
}`;
