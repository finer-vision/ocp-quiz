import styled, { css } from "styled-components";

export const CategoryImage = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  width: auto;
  height: 65%;
  transform: translate(28%, -56%);
`;

export const CategoryContent = styled.div`
  --padding: calc(var(--vw) * (2 / 100));
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: calc(var(--vw) * (2 / 100));

  h4 {
    width: 58%;
    text-align: center;
    font-size: calc(var(--vh) * (3.75 / 100));
  }
`;

type Props = {
  complete: boolean;
};

export const CategoryWrapper = styled.div<Props>`
  width: calc(var(--vw) * (20 / 100));
  aspect-ratio: 697 / 448;
  background-repeat: no-repeat;
  background-image: url("./assets/category-frame.png");
  background-position: 50%;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;

  ${({ complete }) => {
    if (complete) {
      return css`
        pointer-events: none;
      `;
    }
  }};
`;
