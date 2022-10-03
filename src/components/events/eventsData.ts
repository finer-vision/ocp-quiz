import eventsDataJson from "./eventsData.json"

const createEvent = ({date, start, end, eventTitle}: any) => {
    const startDateInSeconds: any = new Date(`${date}T${start}:00`).getTime();
    const endDateInSeconds: any = new Date(`${date}T${end}:00`).getTime();
    const dateKey = `${startDateInSeconds}-${endDateInSeconds}`
    return {
        eventKey: dateKey,
        eventTimes: {start: start, end: end},
        eventTitle: eventTitle
    }
}

export default eventsDataJson.map(event => createEvent(event));