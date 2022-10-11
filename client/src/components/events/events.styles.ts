

import styled from "styled-components"

const getSize = (elementSize: number, dimesnion: "x" | "y") => {
  const originalSize = {x: 3840, y: 2168};
  const size = originalSize[dimesnion];
  const unit = dimesnion === "x" ? "--vw" : "--vh";
  return `calc(var(${unit}) * ${elementSize/size})`
}

export const EventsWrapper = styled.div`
  --header-height: ${getSize(230, "y")};
  position: relative;
  z-index: 50;
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
`

export const Events = styled.div`
  width: 100%;
  height: 100vh;
  gap: calc(var(--vw) * (1.4 / 100));
  display: flex;
  flex-direction: column;
`

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: calc(var(--vw) * (2.5 / 100));
  padding-top: calc(var(--vw) * (3.4 / 100));
  padding-right: calc(var(--vw) * (2.2 / 100));
`

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: calc(var(--vw) * (0.5 / 100));;
  hr {
    height:  calc(var(--vw) * (0.2 / 100));
    background-color: #8DC141;
    border: 0;
    width: calc(var(--vw) * (5.9 / 100));
  }
  #event-name {
    font-size: calc(var(--vw) * (1.2 / 100));
  }
  #event-info {
    display: flex;
    flex-direction: column;
    & > *:first-child {
      font-size: calc(var(--vw) * (1.1 / 100));
    }
    & > *:last-child {
      font-size: calc(var(--vw) * (0.7 / 100));
    }
  }
`

export const EventDates = styled.div`
  display: flex;
  gap: calc(var(--vw) * (1.4 / 100));
`

interface EventDateProps {
  current?: boolean
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
  ${props => props.current && `
    background-color: #8DC141;
    color: white
  `}
`

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--vw) * (1 / 100));
  overflow-y: hidden;
  padding: 0;
  margin-right: calc(var(--vw) * (0.9 / 100));
  margin-left: calc(var(--vw) * (1.1 / 100));
  & > * {
    margin-left: calc(var(--vw) * (1.4 / 100));
    margin-right: calc(var(--vw) * (1.4 / 100));
  }
`

interface EventProps {
  current: boolean
}

export const Event = styled.div<EventProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: calc(var(--vw) * (0.7 / 100));
  & > * {
    padding: calc(var(--vw) * (0.8 / 100));
  }
  #event-header {
    display: flex;
    flex-direction: column;
  }
  #event-time {
    color: #0281F9;
    font-size: calc(var(--vw) * (1 / 100));
  }
  #event-title {
    color: black;
    font-size: calc(var(--vw) * (0.6 / 100));
  }
  ${props => props.current
  ? `
    background: #8DC141;
    #event-time {
      color: black
    }
  `
  : `
    background: white;
  `}
`

export const EventDropdown = styled.div`
  background: rgb(238	242	244);
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
`

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
`