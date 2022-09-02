import styled from "styled-components";

export const EmbedWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #ffffff;

  embed {
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
  }
`;
