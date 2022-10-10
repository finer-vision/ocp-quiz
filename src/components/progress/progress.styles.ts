import styled from "styled-components";

export const QuestionCategoryProgress = styled.div`
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