import styled from "styled-components";

export const ResultsWellDone = styled.img`
  position: absolute;
  bottom: calc(var(--vh) * (-20 / 100));
  right: calc(var(--vw) * (-3 / 100));
  width: calc(var(--vw) * (53 / 100));
  transform: translateY(100%);
  animation: bounceIn 0.75s ease-out forwards;

  @keyframes bounceIn {
    0% {
      transform: translateY(100%);
    }
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

export const ResultsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: calc(var(--vw) * (40 / 100));
  height: 100%;
`;

export const ResultsButton = styled.img`
  width: calc(var(--vw) * (30.2865 / 100));
  height: auto;
  z-index: 1;
`;

export const ResultsScore = styled.h4`
  font-size: calc(var(--vh) * (18 / 100));
  line-height: 1.5em;
  color: #00e7ed;
`;

export const ResultsTitle = styled.h3`
  font-size: calc(var(--vh) * (6 / 100));
  line-height: 1.5em;
  max-width: 15ch;
  text-align: center;
`;

export const ResultsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
