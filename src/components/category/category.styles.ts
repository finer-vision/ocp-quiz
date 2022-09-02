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
  --padding: 2vw;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 2vw;

  h4 {
    width: 58%;
    text-align: center;
    font-size: 3.75vh;
  }
`;

type Props = {
  complete: boolean;
};

export const CategoryWrapper = styled.div<Props>`
  width: 20vw;
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
