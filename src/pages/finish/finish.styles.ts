import styled from "styled-components";

export const FinishCodeDigit = styled.div`
  background-image: url("./assets/code-frame.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-right: 3%;
  font-size: calc(var(--vh) * (14 / 100));
  opacity: 0;
  transform: translateY(100%);
  animation: revealDigit 0.5s ease-out forwards;

  @keyframes revealDigit {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const FinishCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(var(--vw) * (60 / 100));
  margin-inline: auto;
  --delay: 1.25s;

  ${FinishCodeDigit}:nth-child(1) {
    animation-delay: calc(var(--delay) * (1 / 4));
  }

  ${FinishCodeDigit}:nth-child(2) {
    animation-delay: calc(var(--delay) * (2 / 4));
  }

  ${FinishCodeDigit}:nth-child(3) {
    animation-delay: calc(var(--delay) * (3 / 4));
  }

  ${FinishCodeDigit}:nth-child(4) {
    animation-delay: calc(var(--delay) * (4 / 4));
  }
`;

export const FinishButton = styled.img`
  width: calc(var(--vw) * (11.9484375 / 100));
  height: auto;
  z-index: 1;
  display: block;
  margin-inline: auto;
  margin-top: calc(var(--vh) * (3 / 100));
`;

export const FinishDecor = styled.img`
  --offset: 20%;
  position: absolute;
  top: 0;
  right: 0;
  width: calc(var(--vw) * (13 / 100));
  height: auto;
  transform: translate(var(--offset), calc(var(--offset) * -1));
`;

export const FinishWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  h3 {
    font-size: calc(var(--vh) * (6.944444444444445 / 100));
    margin-top: 0.5em;
    margin-bottom: 0.8em;
    text-align: center;
  }

  p {
    font-size: calc(var(--vh) * (3.2407407407407405 / 100));
    text-align: center;
    margin-top: 1em;
  }
`;
