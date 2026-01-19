import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import globe_icon from "../assets/icons/la_globe-americas.svg";
import { getForecast } from "../services/get-forecast.service";
import styles from "../styles/Home.module.scss";
import { cities } from "../utils/cities";

export const Home = () => {
  const navigate = useNavigate();

  const [forecast, setForecast] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(id);
  }, []);

  async function selectCity(lat: number, lon: number) {
    try {
      const forecast = await getForecast(lat, lon);
      navigate("/details", {
        state: { forecast },
      });
      setForecast(forecast);
    } catch (error) {
      console.log("Erro ao obter previsão", error);
    }
  }

  return (
    <div className={`${styles["page-home"]} ${mounted ? styles.enter : ""}`}>
      <div className={styles["container-select"]}>
        <div className={styles["header-container"]}>
          <h1>Weather</h1>
          <h2>Select a City</h2>
        </div>

        <img src={globe_icon} alt="Globo" />

        <div className={styles["cities"]}>
          {cities.map((city) => (
            <p key={city.id} onClick={() => selectCity(city.lat, city.lon)}>
              {city.name}
            </p>
          ))}
        </div>

        {forecast && (
          <div className={styles["weather-info"]}>
            <h3>{forecast.location.name}</h3>
            <p>{forecast.current.temp_c}°C</p>
            <p>{forecast.current.condition.text}</p>
          </div>
        )}
      </div>
    </div>
  );
};
