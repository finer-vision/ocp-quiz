import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeButton = styled(Link)`
  width: 23.896875%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 19vh));
  z-index: 1;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const HomeContent = styled.div`
  border-left: 0.4393229166666667vw solid #ffffff;
  background: linear-gradient(180deg, #0080f9 0%, rgba(0, 129, 250, 0.38) 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  background-color: #e5e5e5;
`;
