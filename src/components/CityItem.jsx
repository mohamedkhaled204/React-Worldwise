import styles from "./CityItem.module.css";
import {Link} from "react-router-dom"

function CityItem({ city, onHandleDelete }) {
    const { emoji, cityName, date, id ,position } = city; 
    console.log(city)

    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));

    return (
        <li>
            <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>({formatDate(date)})</time>
                <button onClick={() => onHandleDelete(id)} className={styles.deleteBtn}>
                    x
                </button>
            </Link>
        </li>
    );
}

export default CityItem;
