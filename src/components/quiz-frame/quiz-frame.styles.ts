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
