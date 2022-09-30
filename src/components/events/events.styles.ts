import styled from "styled-components";

const getSize = (elementSize: number, dimesnion: "x" | "y") => {
  const originalSize = { x: 3840, y: 2168 };
  const size = originalSize[dimesnion];
  const unit = dimesnion === "x" ? "--vw" : "--vh";
  return `calc(var(${unit}) * ${elementSize / size})`;
};

export const EventsWrapper = styled.div`
  --header-height: ${getSize(230, "y")};
  position: relative;
  z-index: 0;
  overflow: auto;
  background-image: url(./assets/background-ocp.png);
  background-size: contain;
  background-repeat: repeat;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 5%;
  padding-bottom: 0.8%;
  padding-top: 0.8%;
  background: white;
  height: var(--header-height);
  width: 100%;
  #logo {
    height: 90%;
  }
`;

export const Events = styled.div`
  width: 100%;
  height: 100vh;
  gap: calc(var(--vw) * (1.4 / 100));
  display: flex;
  flex-direction: column;
`;

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3.921875rem 4.8125rem 0 6rem;
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: calc(var(--vw) * (0.5 / 100));
  hr {
    height: calc(var(--vw) * (0.2 / 100));
    background-color: #8dc141;
    border: 0;
    width: calc(var(--vw) * (5.9 / 100));
  }
  #event-name {
    font-size: 3.125rem;
  }
  #event-info {
    display: flex;
    flex-direction: column;
    & > *:first-child {
      font-size: 2.5rem;
      line-height: 3.22125rem;
    }
    & > *:last-child {
      font-size: 1.5625rem;
      line-height: 2.013125rem;
    }
  }
`;

export const EventDates = styled.div`
  display: flex;
  gap: calc(var(--vw) * (1.4 / 100));
`;

interface EventDateProps {
  current?: boolean;
}

export const EventDate = styled.div<EventDateProps>`
  aspect-ratio: 1;
  background: white;
  border-radius: 5px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5%;
  width: ${getSize(200, "y")};
  font-size: ${getSize(50, "y")};
  ${(props) =>
    props.current &&
    `
    background-color: #8DC141;
    color: white
  `}
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9375rem;
  overflow-y: auto;
  padding: 0;
  margin-right: 4.8125rem;
  margin-left: 6rem;

  /* & > * {
    margin-right: 3.875rem;
  } */

  &::-webkit-scrollbar {
    width: 2.8125rem;
  }

  &::-webkit-scrollbar-track-piece {
    border-radius: 110px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 110px;
    background: var(--color-scrollbar);
    border: 13.5px solid var(--color-scrollbarBG);
  }

  &::-webkit-scrollbar-track {
    border-radius: 110px;
    background: var(--color-scrollbarBG);
  }
`;

interface EventProps {
  current: boolean;
  margin: boolean;
}

export const Event = styled.div<EventProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.25rem;
  & > * {
    padding: 2.125rem 0 1.625rem 4.125rem;
  }
  #event-header {
    display: flex;
    flex-direction: column;
  }
  #event-time {
    color: #0281f9;
    font-size: 3.75rem;
  }
  #event-title {
    color: black;
    font-size: 2.625rem;
  }
  ${(props) =>
    props.current
      ? `
    background: #8DC141;
    #event-time {
      color: black
    }
  `
      : `
    background: white;
  `}

  ${(props) =>
    props.margin
      ? `
      margin-right: 3.875rem;
  `
      : `
  `}
`;

export const EventDropdown = styled.div`
  background: rgb(238 242 244);
  color: black;
  padding: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  #event-header {
    display: block;
    margin-bottom: 20px;
  }
  #event-dropdown-title {
    font-weight: bold;
    font-size: 24px;
  }
`;

export const EventClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  img {
    width: 60%;
    height: 60%;
  }
`;
