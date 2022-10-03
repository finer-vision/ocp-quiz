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
  width: calc(var(--vw) * (26 / 100));
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
  margin-left: calc(var(--vw) * (3 / 100) * -1);
  margin-top: calc(var(--vw) * (0.469 / 100) * -1);
  gap: calc(var(--vw) * (1.1 / 100));

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
    height: calc(var(--vw) * (5.521 / 100));

    :last-child {
      margin-bottom: 0;
    }

    > img {
      width: calc(var(--vh) * (3 / 100));
    }

    p {
      position: relative;
      z-index: 1;
      font-size: calc(var(--vh) * (3.240740740740741 / 100));

      img {
        position: absolute;
        top: 50%;
        left: -1.5ch;
        transform: translate(0%, calc(-50% + 0.25ch));
        width: calc(100% + 3ch);
        height: auto;
        z-index: -1;
        width: calc(var(--vw) * (60.96875 / 100));
        height: calc(var(--vh) * (11.695721077654517 / 100)); 
      }
    }
  }
`;

export const QuestionAnswers = styled.div`
  //
`;

export const QuestionProgress = styled.div`
  font-size: calc(var(--vh) * (4 / 100));
  line-height: calc(var(--vh) * (4.5 / 100));
  letter-spacing: calc(var(--vh) * (0.6 / 100));
  color: #00e7ed;
`;

export const QuestionTitle = styled.h3`
  font-size: calc(var(--vh) * (5 / 100));
  line-height: 1.5em;
  letter-spacing: calc(var(--vh) * (0.6 / 100));
`;

export const QuestionContainer = styled.div`
  width: calc(var(--vw) * (59 / 100));
  height: 100%;
  margin-left: auto;
  margin-right: calc(var(--vw) * (4 / 100));
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

export const QuestionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
