import styled, { css } from "styled-components";

export const FadeIn = styled.span<{ delay?: number }>`
  opacity: 0;
  animation: fadeIn 1s linear forwards;
  animation-delay: ${({ delay }) => delay ?? 0}s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
