import styled from "styled-components";

export const BuildingsParallaxFront = styled.div`
  background-image: url("./assets/buildings-front.png");
  background-blend-mode: normal;
  mix-blend-mode: normal;
`;

export const BuildingsParallaxBack = styled.div`
  background-image: url("./assets/buildings-back.png");
  mix-blend-mode: multiply;
`;

export const BuildingsParallaxWrapper = styled.div`
  --duration: 20000ms;
  --repititions: 4;
  --scale: 8;
  width: 100%;
  height: 33.61157407407408vh;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;

  ${BuildingsParallaxFront}, ${BuildingsParallaxBack} {
    --speed: 1;
    --dir: 1;
    width: calc(100vw * var(--repititions));
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-position: 0 100%;
    background-size: calc(100% / var(--scale)) auto;
    background-repeat: repeat-x;
    animation: scroll calc(var(--duration) * var(--speed)) linear infinite;

    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }

      100% {
        transform: translateX(calc(100% * (-0.5 * var(--dir))));
      }
    }
  }

  ${BuildingsParallaxBack} {
    --speed: 2;
  }
`;
