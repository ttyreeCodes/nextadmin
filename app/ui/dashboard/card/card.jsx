import styles from "./card.module.css"
import {MdSupervisedUserCircle} from "react-icons/md";

const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24}/>
            <div className={styles.text}>
                <span className={styles.title}>Total Users</span>
                <span>10,730</span>
            </div>
        </div>

    )
}

export default Card
