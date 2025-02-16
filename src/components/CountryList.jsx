import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner"
import Message from "./Message"

function CountryList({ cities, loading, onHandleDelete }) {
    if (loading) return <Spinner />
    if (!cities.length) return <Message message="Add your first Country by clicking on map" />

    const country = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
            return [...arr, { country: city.country, emoji: city.emoji }]
        else return arr;
    }, [])

    return (
        <ul className={styles.countryList}>
            {country.map((country) => (
                <CountryItem country={country} onHandleDelete={onHandleDelete} key={country.id} />
            ))}
        </ul>
    );
}

export default CountryList;
