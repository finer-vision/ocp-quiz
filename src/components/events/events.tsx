import React, { useEffect, useState } from "react";
import { Event, EventClose, EventDate, EventDates, EventDropdown, EventInfo, Events, EventsList, EventsWrapper, Header, Overview } from "@/components/events/events.styles";
import eventsData  from "./eventsData";

export default () => {
  const [currentDate, setCurrentDate] = useState(new Date().getTime());

  const todayDate = new Date().getDate();
  const [selectedDate, setSelectedDate] = useState<number>((todayDate < 18 || todayDate > 20) ? 18 : todayDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().getTime());
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <EventsWrapper>
      <Header>
        <img id="logo" src="/assets/logo-opencompute.svg"/>
      </Header>
      <Events>
        <Overview>
          <EventInfo>
            <h1 id="event-name">OCP GLOBAL SUMMIT</h1>
            <hr/>
            <div id="event-info">
              <strong>San Jose, California</strong>
              <span>October 18 - 20, 2022</span>
            </div>
          </EventInfo>
          <EventDates>
            <EventDate onClick={() => setSelectedDate(18)} current={selectedDate === 18}>18 OCT</EventDate>
            <EventDate onClick={() => setSelectedDate(19)} current={selectedDate === 19}>19 OCT</EventDate>
            <EventDate onClick={() => setSelectedDate(20)} current={selectedDate === 20}>20 OCT</EventDate>
          </EventDates>
        </Overview>
        <EventsList>
          {eventsData.map(({eventTimes: {start, end}, eventTitle, eventKey}: any, key) => {
            const [startDateInSeconds, endDateInSeconds] = eventKey.split('-');
            if(selectedDate !== new Date(Number(startDateInSeconds)).getDate()) {
              return null
            }
            return (
              <Event
              current={currentDate >= Number(startDateInSeconds) && currentDate <= Number(endDateInSeconds)}
              key={key} id="event">
                <div id="event-header">
                  <span id="event-time">{start} - {end}</span>
                  <span id="event-title">{eventTitle}</span>
                </div>
              </Event>
            )
          })}
        </EventsList>
      </Events>
    </EventsWrapper>
  );
}