import styled from "styled-components";

export const CategorySelectorContent = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding-right: calc(var(--vw) * (10 / 100));

  h3 {
    font-size: calc(var(--vh) * (6.944444444444445 / 100));
    margin-bottom: 0.5em;
  }
`;

export const CategorySelectorCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--vw) * (2.5 / 100));
`;

export const CategorySelectorWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
