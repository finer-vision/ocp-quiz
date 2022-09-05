import styled from "styled-components";

export const QuizFrameContent = styled.div`
  --padding: calc(var(--vw) * (14 / 100));
  width: calc(100% - var(--padding));
  height: calc(100% - var(--padding));
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const QuizFrameBorder = styled.div`
  --padding: calc(var(--vw) * (3.4895833333333335 / 100));
  width: calc(100% - var(--padding));
  height: calc(100% - var(--padding));
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("./assets/neon-frame.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  animation: neon-flicker 3s ease-in-out infinite alternate;

  @keyframes neon-flicker {
    0%,
    19.999%,
    22%,
    62.999%,
    64%,
    64.999%,
    70%,
    100% {
      opacity: 0.99;
    }
    20%,
    21.999%,
    63%,
    63.999%,
    65%,
    69.999% {
      opacity: 0.4;
    }
  }
`;

export const QuizFrameContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const QuizFrameWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./assets/brick-background.jpg");
  background-size: cover;
  background-position: 50%;
  display: flex;
  flex-direction: column;
`;
