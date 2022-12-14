import styled from "styled-components";

export const ResultsWellDone = styled.video`
  pointer-events: none;
  position: absolute;
  z-index: 50;
  pointer-events: none;
  height: 200%;
  margin-left: 4%;
  margin-top: -55%;

`;

interface ResultsInfoProps {
  image?: string;
}

export const ResultsInfo = styled.div<ResultsInfoProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 45%;
  height: 90%;
  margin-left: 2.5%;
  margin-top: 2.5%;
  overflow: visible;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 25%, 98.68% 25%, 98.68% 62.5%, 100% 62.5%, 100% 100%, 0% 100%);
    border: .2vh solid rgb(211	253	254);
    border-radius: 2vh;
  }
  &::after {
    content: '${props => props.image!.replaceAll("-", " ").replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase())}';
    position: absolute;
    height: 30%;
    width: 50%;
    right: -34%;
    top: 30%;
    background: url(./assets/${props => props.image}.png) no-repeat;
    background-size: 40%;
    background-position: 53% 40%;
    z-index: 50;
    padding: 10%;
    padding-top: 0;
    text-align: center;
    font-size: 1.9vw;
    font-weight: 500;
  }
`;

interface ResultsButtonProps {
  finish?: boolean;
}

export const ResultsButton = styled.img<ResultsButtonProps>`
  width: calc(var(--vw) * (30.2865 / 100));
  height: auto;
  z-index: 1;
  ${props => props.finish && `
    width:  calc(var(--vw) * (15.2865 / 100));
    margin-left: 5%;
  `}
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
