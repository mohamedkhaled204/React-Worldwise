import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    const navigate = useNavigate()

    return (
        <div className={styles.mapContainer} 
        onClick={()=>navigate('form')}> 
            <p>map</p>
            <p>Position is: {lat} , {lng}</p>   
            <button onClick={() => setSearchParams({ lat: 35752575378, lng: 373675656 })}>
                Click
            </button>
        </div>
    );
}

export default Map;
