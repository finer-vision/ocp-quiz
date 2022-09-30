import styled, { css } from "styled-components";
import { FadeIn } from "@/styles/elements";

export const QuestionCategoryProgress = styled.div`
  position: absolute;
  right: calc(var(--vw) * (-1 / 100));
  bottom: calc(var(--vh) * (-3 / 100));
  font-family: "Orbitron", sans-serif;
  font-size: calc(var(--vh) * (3 / 100));
  display: flex;
  align-items: center;
  gap: calc(var(--vw) * (1 / 100));

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: calc(var(--vw) * (0.25 / 100));

    img {
      width: calc(var(--vw) * (2 / 100));
    }
  }
`;

export const QuestionAnswerBooleanAnswer = styled.img<{ selected: boolean }>`
  display: block;
  width: 62.40625rem;
  ${({ selected }) => {
    if (selected) {
      return css`
        filter: brightness(175%);
      `;
    }
  }};
`;

export const QuestionAnswerBoolean = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  margin-left: -7.125rem;
  margin-top: -1.125rem;
  gap: 2.5625rem;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        pointer-events: none;
      `;
    }
  }};

  ${FadeIn}:last-child {
    transform: translateY(calc(var(--vh) * (10 / 100)));
  }
`;

export const QuestionAnswerMulti = styled.ul<{ disabled: boolean }>`
  list-style: none;
  margin-top: calc(var(--vh) * (5 / 100));

  ${({ disabled }) => {
    if (disabled) {
      return css`
        pointer-events: none;
      `;
    }
  }};

  li {
    display: flex;
    align-items: center;
    gap: calc(var(--vw) * (1 / 100));
    font-size: calc(var(--vh) * (3.2407407407407405 / 100));
    margin-bottom: calc(var(--vh) * (3.2407407407407405 / 100));

    :last-child {
      margin-bottom: 0;
    }

    > img {
      width: calc(var(--vw) * (3 / 100));
    }

    p {
      position: relative;
      z-index: 1;

      img {
        position: absolute;
        top: 50%;
        left: -1.5ch;
        transform: translate(0%, calc(-50% + 0.25ch));
        width: calc(100% + 3ch);
        height: auto;
        z-index: -1;
      }
    }
  }
`;

export const QuestionAnswers = styled.div`
  //
`;

export const QuestionProgress = styled.div`
  font-size: 4.6875rem;
  line-height: 6.0625rem;
  letter-spacing: 0.75rem;
  color: #00e7ed;
`;

export const QuestionTitle = styled.h3`
  font-size: 9.375rem;
  line-height: 12.079375rem;
  letter-spacing: 0.75rem;
`;

export const QuestionContainer = styled.div`
  width: calc(var(--vw) * (55 / 100));
  height: 100%;
  margin-left: auto;
  margin-right: calc(var(--vw) * (8 / 100));
`;

export const QuestionDecorContainer = styled.div`
  position: relative;
`;

interface QuestionDecorProps {
  index?: string;
}

export const QuestionDecor = styled.img<QuestionDecorProps>`
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
      ? `width: 41.3125rem;
        top: 10px;
        right: 0px;
        animation-delay: 500ms;
        `
      : props.index === "2"
      ? `width: 36.118125rem;
        top: 129px;
        right: 157px;
        animation-delay: 750ms;
        `
      : props.index === "3"
      ? `width: 35.44375rem;
        top: 202px;
        right: -66px;
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

export const QuestionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
