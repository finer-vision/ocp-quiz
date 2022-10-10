import styled, { css } from "styled-components";
import { FadeIn } from "@/styles/elements";
import { motion } from "framer-motion"

export const QuestionCategoryProgress = styled.div`
  div {
    position: absolute;
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
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  width: 90%;

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
      width: 6%;
    }
  }
`;

interface QuestionAnswerProps {
  correct: boolean,
  incorrect: boolean
}

export const AnswerBorder = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-color: var(--border-colour);
  border-radius: 100vw;
}
`

export const AnswerBorderTop = styled(AnswerBorder).attrs(() => ({
  initial: {
    width: '0',
    borderTopRightRadius: '0'
  },
  animate: {
    width: [0, ],
  },
  transition: {
    duration: 3
  },
  transitionEnd: {
    borderTopRightRadius: '100vw'
  }
}))`
  border-top: .2vh solid;
`;

export const AnswerBorderBottom = styled(AnswerBorder)`

`;

export const AnswerBorderLeft = styled(AnswerBorder)`

`;

export const AnswerBorderRight = styled(AnswerBorder)`

`;

export const QuestionAnswer = styled(motion.p)<QuestionAnswerProps>`
  position: relative;
  z-index: 1;
  font-size: calc(var(--vh) * (3.240740740740741 / 100));
  padding: 3%;
  padding-top: 1.3%;
  padding-bottom: 1.3%;
  border-radius: 100vh;
  width: 100%;
  border: .2vh solid rgba(213,	248,	205, 0);
  &:after {
    border-radius: 100vh;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  ${props => props.correct && `
    background: rgb(13 82 13 / 53%);
    box-shadow: inset 0 0 .4vh rgb(64	188	57);
    &:after {
      box-shadow: 0 0 1vh rgb(64 255	57);
    }
    ${AnswerBorder} {
      --border-colour: .2vh solid rgb(213	248	205	);
    }
  `}
  ${props => props.incorrect && `
      background: rgba(118,	58,	104, 53%);
      box-shadow: inset 0 0 .4vh rgb(163	83	111);
      &:after {
        box-shadow: 0 0 1vh rgb(255	83	111);
      }
      ${AnswerBorder} { 
        border: none;
        --border-colour: .2vh solid rgb(243 227	230);
      }
  `}
  
`


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
  line-height: 1.5em;
  letter-spacing: calc(var(--vh) * (0.6 / 100));
`;

export const QuestionContainer = styled.div`
  width: calc(var(--vw) * (59 / 100));
  height: 100%;
  margin-left: 15%;
`;

export const QuestionDecorContainer = styled.div`
  position: relative;
`;

export const TimerContainer = styled.div`
  position: absolute;
  background-image: url("./assets/timer.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: calc(var(--vw) * (12.8125 / 100));
  height: calc(var(--vh) * (9.861111111111111 / 100));
  left: calc(var(--vw) * (-2.6 / 100));
  top: calc(var(--vh) * (-4.8 / 100));
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: calc(var(--vw) * (1 / 100));

  & > img {
    height: calc(var(--vh) * (6 / 100));
    padding-bottom: calc(var(--vh) * (0.8 / 100));
  }
  & > img.colon {
    height: calc(var(--vh) * (4 / 100));
  }
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
