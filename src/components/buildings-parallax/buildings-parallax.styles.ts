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
  width: 100%;
  height: 33.61157407407408vh;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;

  ${BuildingsParallaxFront}, ${BuildingsParallaxBack} {
    --speed: 1;
    --dir: 1;
    width: calc(100% * 2);
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-position: 0 100%;
    background-size: 50% auto;
    background-repeat: repeat-x;
    animation: scroll calc(5000ms * var(--speed)) linear infinite;

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
