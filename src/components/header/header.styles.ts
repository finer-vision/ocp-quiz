import styled from "styled-components";

export const HeaderLogo = styled.video`
  width: auto;
  height: calc(var(--height) * 0.7);
`;

export const HeaderWrapper = styled.header`
  --height: calc(var(--vh) * (11.11 / 100));
  background-color: #1c2b33;
  width: 100%;
  height: var(--height);
  display: flex;
  align-items: center;
  justify-content: center;
`;
