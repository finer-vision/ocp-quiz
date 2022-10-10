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

export const FinishDecorContainer = styled.div`
  position: relative;
`;

interface FinishDecorProps {
  index?: string;
}

export const FinishDecor = styled.img<FinishDecorProps>`
  --offset: 20%;
  position: absolute;
  top: 0;
  right: 0;
  width: calc(var(--vw) * (13 / 100));
  height: auto;
  transform: translate(var(--offset), calc(var(--offset) * -1));
  animation: neon-flicker 3s ease-in-out infinite alternate;

  ${(props) =>
    props.index === "1"
      ? `width: calc(var(--vw) * (17.2139 / 100));
        top: calc(var(--vh) * (0.46295 / 100));
        right: 0px;
        animation-delay: 500ms;
        `
      : props.index === "2"
      ? `width: calc(var(--vw) * (14.528 / 100));
        top: calc(var(--vh) * (5.972201 / 100));
        right: calc(var(--vw) * (4.08855 / 100));
        animation-delay: 750ms;
        `
      : props.index === "3"
      ? `width: calc(var(--vw) * (14.508 / 100));
        top: calc(var(--vh) * (9.351818620155039 / 100));
        right: calc(var(--vw) * (-1.718753503184713 / 100));
        animation-delay: 1000ms;
        `
      : ``}
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