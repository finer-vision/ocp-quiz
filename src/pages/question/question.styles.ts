import styled from "styled-components";

export const QuestionAnswers = styled.div`
  ul {
    list-style: none;
    margin-top: calc(var(--vh) * (5 / 100));
  }

  li {
    display: flex;
    align-items: center;
    gap: calc(var(--vw) * (1 / 100));
    font-size: calc(var(--vh) * (3.2407407407407405 / 100));
    margin-bottom: calc(var(--vh) * (3.2407407407407405 / 100));

    :last-child {
      margin-bottom: 0;
    }

    img {
      width: calc(var(--vw) * (3 / 100));
    }
  }
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
