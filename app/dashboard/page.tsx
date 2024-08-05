import styles from "app/ui/dashboard/dashboard.module.css";
import Chart from "../ui/dashboard/chart/chart";
import Card, {cardItem} from "../ui/dashboard/card/card";
import {IoCalendarOutline, IoEllipsisHorizontalCircle} from "react-icons/io5";
import {PiUserCircle} from "react-icons/pi";
import {HiOutlineChatBubbleOvalLeftEllipsis} from "react-icons/hi2";
import Events from "../ui/dashboard/events/events";

const metricItems: cardItem[] = [
    {
        text: "Upcoming Events",
        path: "/upcoming-events",
        icon: <IoCalendarOutline size={"auto"}/>,
        number: "190"
    },
    {
        text: "Pending Events",
        path: "/pending-events",
        icon: <IoEllipsisHorizontalCircle size={"auto"}/>,
        number: "2"
    },
    {
        text: "Users",
        path: "/users",
        icon: <PiUserCircle size={"auto"}/>,
        number: "16,829"
    },
    {
        text: "Reactions",
        path: "/reactions",
        icon: <HiOutlineChatBubbleOvalLeftEllipsis size={"auto"}/> ,
        number: "66"
    },
]

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    {metricItems.map(item => (
                        <Card item={item} key={item.text}/>
                    ))}
                </div>
                <Events/>

            </div>
        </div>
    )
}

export default Dashboard
