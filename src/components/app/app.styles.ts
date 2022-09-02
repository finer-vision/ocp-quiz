import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-rendering: inherit;
    color: inherit;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
    touch-action: none;
    overscroll-behavior: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html {
    font-family: "Optimistic Display", system-ui, sans-serif;
    text-rendering: geometricPrecision;
    font-weight: normal;
    line-height: 1.2;
    background-color: #1e1e1e;
    color: #fefefe;
  }
`;
