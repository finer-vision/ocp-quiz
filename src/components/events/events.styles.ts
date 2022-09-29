import styled from "styled-components";

export const EventsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  background-image: url(/assets/background-ocp.png);
  background-size: contain;
  background-repeat: repeat;
`;


export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 40px;
  background: white;
  height: 80px;
  width: 100%;
  #logo {
    height: 90%;
  }
`

export const Events = styled.div`
  width: 100%;
  height: 90.3%;
  gap: 20px;
  display: flex;
  flex-direction: column;
`

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 40px;
  padding-top: 40px;
  padding-right: 30px;
`

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  hr {
    height: 3px;
    background-color: #8DC141;
    border: 0;
    width: 90px;
  }
  #event-name {
    font-size: 20px;
  }
  #event-info {
    display: flex;
    flex-direction: column;
    & > *:first-child {
      font-size: 18px;
    }
    & > *:last-child {
      font-size: 12px;
    }
  }
`

export const EventDates = styled.div`
  display: flex;
  gap: 15px;
`

interface EventDateProps {
  current?: boolean
}

export const EventDate = styled.div<EventDateProps>`
  width: 90%;
  aspect-ratio: 1;
  background: white;
  border-radius: 5px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-align: center;
  padding: 5%;
  ${props => props.current && `
    background-color: #8DC141;
    color: white
  `}
`

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  padding: 0;
  margin-right: 30px;
  margin-bottom: 20px;
  & > * {
    margin-left: 40px;
    margin-right: 20px;
  }
  &::-webkit-scrollbar {
    width: 15px;
    border: 10px solid white;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border: 4px solid white;
    background: #0281F9;
    border-radius: 20px;
  }
`

interface EventProps {
  current: boolean
}

export const Event = styled.div<EventProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  & > * {
    padding: 20px;
    padding-bottom: 0;
  }
  #event-header {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  #event-time {
    color: #0281F9;
    font-size: 24px;
  }
  #event-title {
    color: black;
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