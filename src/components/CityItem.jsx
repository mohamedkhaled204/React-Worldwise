import styles from "./CityItem.module.css";

function CityItem({ city, onHandleDelete }) {
    function deleteItem(id) {
        onHandleDelete(id);
    }

    const { emoji, cityName, date, iditem } = city;
    console.log(city);

    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));

    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>({formatDate(date)})</time>
            <button onClick={() => deleteItem(iditem)} className={styles.deleteBtn}>
                x
            </button>
        </li>
    );
}

export default CityItem;
