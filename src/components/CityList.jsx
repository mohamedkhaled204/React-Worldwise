import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner"
import Message from "./Message"

function CityList({ cities , loading ,onHandleDelete}) {
  if(loading) return <Spinner />
  if(!cities.length) return <Message message="Add your first city by clicking on map" />
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} onHandleDelete={onHandleDelete} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
