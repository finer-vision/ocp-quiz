import styled from "styled-components";

export const CategorySelectorContent = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding-right: 10vw;

  h3 {
    font-size: 6.944444444444445vh;
    margin-bottom: 0.5em;
  }
`;

export const CategorySelectorCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5vw;
`;

export const CategorySelectorWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
