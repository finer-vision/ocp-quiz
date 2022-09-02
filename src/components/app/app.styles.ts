import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  :root {
    --root-scale: 3;
    --root-size: calc(var(--root-scale) * 1vh);
    --root-min: 16px;
    --root-max: 20px;
  }

  @media (orientation: portrait) {
    --root-size: calc(var(--root-scale) * 1vw);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
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
    font-family: system-ui, sans-serif;
    font-weight: normal;
    line-height: 1em;
    background-color: #1e1e1e;
    color: #fefefe;
  }
`;
