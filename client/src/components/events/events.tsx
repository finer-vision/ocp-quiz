import React, { startTransition, useEffect, useState } from "react";
import { Event, EventClose, EventDate, EventDates, EventDropdown, EventInfo, Events, EventsList, EventsWrapper, Header, Overview } from "@/components/events/events.styles";
import eventsData  from "./eventsData"

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
        <img id="logo" src="./assets/logo-opencompute.svg"/>
      </Header>
      <Events>
        <Overview>
          <EventInfo>
            <h1 id="event-name">META SPEAKER ENGAGEMENTS</h1>
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
        <EventsList eventsLength={eventsData.filter(({eventTimes, eventTitle, eventKey}: any) => {
          const [startDateInSeconds, endDateInSeconds] = eventKey.split('-');
          if(selectedDate === new Date(Number(startDateInSeconds)).getDate()) {
            return true
          }
          return false
        }).length}>
          <div id="event-list">
            {eventsData.map(({eventTimes: {start, end}, eventTitle, eventKey}: any, key) => {
              const [startDateInSeconds, endDateInSeconds] = eventKey.split('-');
              if(selectedDate !== new Date(Number(startDateInSeconds)).getDate()) {
                return null
              }
              const [title, location, presented] = eventTitle.split("//")
              return (
                <Event
                current={currentDate >= Number(startDateInSeconds) && currentDate <= Number(endDateInSeconds)}
                key={key} id="event">
                  <div id="event-header">
                    <span id="event-time">{start} - {end}</span>
                    <div id="event-info">
                      <span id="event-title">{title}</span>
                      <span>{presented}</span>
                      <span>{location}</span>
                    </div>
                  </div>
                </Event>
              )
            })}
          </div>
        </EventsList>
      </Events>
    </EventsWrapper>
  );
}