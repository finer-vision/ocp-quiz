import styled from "styled-components";

export const EmbedWrapper = styled.embed`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: hsla(0deg, 0%, 50%, 0.5);
  animation: loading 2000ms linear infinite;

  @keyframes loading {
    0%,
    100% {
      background-color: hsla(0deg, 0%, 50%, 0.5);
    }
    50% {
      background-color: hsla(0deg, 0%, 25%, 0.5);
    }
  }
`;
