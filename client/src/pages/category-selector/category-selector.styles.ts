import styled, { css } from "styled-components";
import { CategoryWrapper } from "@/components/category/category.styles";

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
  --duration: 1s;
  --delay: calc(var(--duration) * 0.5);

  ${CategoryWrapper} {
    opacity: 0;
    transform: translateY(100%);
    animation: slideIn var(--duration) ease-out forwards;

    ${() => {
      return [...Array(4)].map((_, i) => {
        return css`
          :nth-child(${i + 1}) {
            animation-delay: calc(var(--delay) * ${i});
          }
        `;
      });
    }};

    img { 
      z-index: 50;
    }

    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

export const CategorySelectorWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const QuizVideo = styled.video`
  pointer-events: none;
  position: absolute;
  z-index: 50;
  pointer-events: none;
  height: 120%;
  margin-left: -39%;
  margin-top: -5%;
`