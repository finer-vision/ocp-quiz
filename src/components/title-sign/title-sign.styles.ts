import styled from "styled-components";

export const TitleSignBillboard = styled.div`
  width: 100%;
  height: 50.693557422969185%;
  background-image: url("./assets/sign-billboard.png");
  background-repeat: no-repeat;
  background-size: contain;
  transform: translateY(17%);
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
  transform: translateX(-50%);
`;

export const TitleSignWrapper = styled.div`
  --scale: 1;
  width: calc(29.226822916666666vw / var(--scale));
  height: 92.96875vh;
  position: relative;
  z-index: 1;
`;
