import { createGlobalStyle } from 'styled-components';

// Design Pattern Variables
import { generalColors } from './variables.style';

const { $black, $defaultColor } = generalColors;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: ${$defaultColor};
    -webkit-font-smothing: antialiased !important;
  }

  body, input, button {
    color: ${$black};
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
