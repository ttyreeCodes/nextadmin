import React from "react";


export type event = {
    eventId: number,
    eventName: string,
    datetimeStart: dateTime
    location: eventLocation,
}

type dateTime = {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
}

type eventLocation = {
    locationId: number,
    locationName: string,
}


interface eventProps {
    item: event,
}

const Event = ({item}: eventProps) => {

    const dateStart = new Date(item.datetimeStart.year, item.datetimeStart.month, item.datetimeStart.year)
    const formattedDate = dateStart.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: 'long'
    });

    return (
        <tr>
            <td>{item.eventName}</td>
            <td>{formattedDate}</td>
            {/*<td>{item.location.locationName}</td>*/}
        </tr>
    )
}

export default Event
