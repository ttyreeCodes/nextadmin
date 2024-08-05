

import styles from "./events.module.scss"

import React, {useState} from "react";

import Event, {event} from "./event";

const getEvents = async () => {
    const response = await fetch('http://0.0.0.0:8080/events?resultsPerPage=10')
    return response.json()
}

async function Events() {

    const events:event[] = await getEvents()

    return (
        <div className={styles.container}>
            <h2>Manage Events</h2>
            <table className={styles.events}>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Date</td>
                    <td>Place</td>
                </tr>
                </thead>
                <tbody className={styles.events}>

                    {events.map(item => (
                        <Event item={item} key={item.eventId} />
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Events
