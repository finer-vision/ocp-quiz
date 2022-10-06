import styled from "styled-components";

export const TitleSignBillboard = styled.div`
  width: 100%;
  height: 50.693557422969185%;
  background-image: url("./assets/sign-billboard.png");
  background-repeat: no-repeat;
  background-size: contain;
  transform: translateY(17%) translateX(-25%);
`;

export const TitleSignScaffolding = styled.div`
  width: 51.95534210690451%;
  height: 58.357703%;
  background-image: url("./assets/sign-scaffolding.png");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-100%);
`;

export const TitleSignWrapper = styled.div`
  --scale: 1;
  width: calc(var(--vw) * (29.226822916666666 / 100));
  height: calc(var(--vh) * (92.96875 / 100));
  position: relative;
  z-index: 1;
`;
