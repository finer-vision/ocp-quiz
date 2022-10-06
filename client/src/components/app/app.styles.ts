import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  :root {
    --vw: 100vw;
    --vh: 100vh;
    --root-size: calc(var(--root-ratio) * min(1vw, 1vh));
    --root-min: 12px;
    --root-max: 20px;
    --color-scrollbar: #0281F9;
    --color-scrollbarBG: #ffffff;
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
    font-size: clamp(var(--root-min), var(--root-size), var(--root-max));
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
    width: calc(100vh * (16 / 9));
    height: 100vh;

    @media (max-aspect-ratio: 16 / 9) {
      width: 100vw;
      height: calc(100vw * (9 / 16));
    }

    @media (min-aspect-ratio: 16 / 9) {
      width: calc(100vh * (16 / 9));
      height: 100vh;
    }
  }
`;
