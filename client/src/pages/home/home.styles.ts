import styled, { css } from "styled-components";
import { HomeState } from "@/types";
import { EventsWrapper } from "@/components/events/events.styles";
import { TitleSignWrapper } from "@/components/title-sign/title-sign.styles";
import { motion } from "framer-motion";

export const HomeIntroVideo = styled.video`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 70%;
  width: auto;
  pointer-events: none;
`;

export const HomeButton = styled.img`
  width: 23.896875%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-123%, calc(-50% + calc(var(--vh) * (19 / 100))));
  z-index: 1;
`;

export const HomeContent = styled.div`
  background: linear-gradient(180deg, #0080f9 0%, rgba(0, 129, 250, 0.38) 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Props = {
  state: HomeState;
};

export const HomeWrapper = styled.div<Props>`
  --speed: 1000ms;
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  position: relative;

  ${EventsWrapper} {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    border-right: calc(var(--vw) * (0.4393229166666667 / 100)) solid #ffffff;
  }

  ${EventsWrapper}, ${HomeContent} {
    width: calc(var(--vw) * (50 / 100));
  }

  ${HomeContent} {
    margin-left: calc(var(--vw) * (50 / 100));
    height: 100%;
  }

  ${TitleSignWrapper} {
    transition: transform var(--speed) linear;
    transform: translateX(-30%);
  }

  ${({ state }) => {
    if (state === HomeState.intro) {
      return css`
        ${EventsWrapper}, ${HomeContent} {
          transition: all var(--speed) linear;
        }

        ${EventsWrapper} {
          transform: translateX(-100%);
        }

        ${HomeContent} {
          width: calc(var(--vw) * (100 / 100));
          margin-left: 0;
        }

        ${TitleSignWrapper} {
          transform: scale(1.75) translateY(19%) translateX(0%);
        }
      `;
    }
  }};
`;

export const HomeVideo = styled(motion.video)`
  pointer-events: none;
  position: absolute;
  z-index: 50;
  height: 70%;
  margin-left: 35%;
  margin-top: 40%;
`

export const Sticker = styled(motion.img)`
  position: fixed;
  width: calc(var(--vw) * (15 / 100));
  margin-top: -23%;
  margin-left: 16%;
`