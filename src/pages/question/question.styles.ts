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
  width: calc(var(--vw) * (20 / 100));
  ${({ selected }) => {
    if (selected) {
      return css`
        filter: brightness(175%);
      `;
    }
  }};
`;

export const QuestionAnswerBoolean = styled.div<{ disabled: boolean }>`
  margin-top: calc(var(--vh) * (5 / 100));
  display: flex;
  align-items: center;
  gap: calc(var(--vw) * (5 / 100));

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
  font-size: calc(var(--vh) * (2.75 / 100));
  color: #00e7ed;
`;

export const QuestionTitle = styled.h3`
  font-size: calc(var(--vh) * (6 / 100));
  line-height: 1.5em;
`;

export const QuestionContainer = styled.div`
  width: calc(var(--vw) * (55 / 100));
  height: 100%;
  margin-left: auto;
  margin-right: calc(var(--vw) * (8 / 100));
`;

export const QuestionDecor = styled.img`
  --offset: 20%;
  position: absolute;
  top: 0;
  right: 0;
  width: calc(var(--vw) * (13 / 100));
  height: auto;
  transform: translate(var(--offset), calc(var(--offset) * -1));
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
