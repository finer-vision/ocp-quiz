import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  :root {
    --vw: 100vw;
    --vh: 100vh;
  }

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

  body {
    display: flex;
    align-items: start;
    justify-content: center;
  }

  #root {
    position: relative;
    aspect-ratio: 16 / 9;
    width: auto;
    height: calc(var(--vh) * (100 / 100));

    @media (max-aspect-ratio: 16 / 9) {
      width: 100vw;
      height: auto;
    }

    @media (min-aspect-ratio: 16 / 9) {
      width: auto;
      height: 100vh;
    }
  }
`;
