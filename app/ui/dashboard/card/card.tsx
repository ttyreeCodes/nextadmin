import styles from "./card.module.css"
import Link from "next/link";
import {ReactNode} from "react";

export type cardItem = {
    text: string,
    path: string,
    icon: ReactNode,
    number: string
}

interface cardProps {
    item: cardItem,
    key: string
}

const Card = ({item, key}: cardProps) => {
    return (
        <div className={styles.container} key={key}>
            <div className={styles.icon}>{item.icon}</div>
            <span className={styles.number}>{item.number}</span>
            <Link href={item.path} className={styles.text}>{item.text}</Link>
        </div>

    )
}

export default Card
