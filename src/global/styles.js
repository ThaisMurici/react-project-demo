import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialised !important;
    background: #fff;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
  
  button {
    cursor: pointer;
  }
`;
