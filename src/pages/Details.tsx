import { useDetailsForecast } from "../hooks/useDetailsForecast";
import styles from "../styles/Details.module.scss";
import type { DayPeriod } from "../styles/themes/theme.config";
import { getIconByPeriod } from "../styles/themes/theme.config";

export const Details = () => {
  const data = useDetailsForecast();
  
  if (!data) return null;

  const { forecast, theme, icons, dayParts, themeStyles } = data;

  return (
    <div className={styles["page-details"]} style={themeStyles}>
      <div className={styles["container-select"]}>
        <div className={styles["header-container"]}>
          <h1>{forecast.location.name}</h1>
          <h2>{forecast.current.condition.text}</h2>
        </div>

        <div className={styles["container-current-temp"]}>
          <div className={styles["box-current-temp"]}>
            <h1>{forecast.current.temp_c}</h1>
            <div className={styles["box-current-temp-right"]}>
              <p>°c</p>
              <div className={styles["box-min-max-temp"]}>
                <span>
                  <img src={icons.arrowUp} />
                  <p>{forecast.forecast.forecastday[0].day.maxtemp_c}°</p>
                </span>

                <span>
                  <img src={icons.arrowDown} />
                  <p>{forecast.forecast.forecastday[0].day.mintemp_c}°</p>
                </span>
              </div>
            </div>
          </div>

          <img className={styles.sun_black} src={icons.sun} alt="sol" />

          <div className={styles["days-forecast"]}>
            {dayParts.map((part) => (
              <div className={styles["days"]} key={part.label}>
                <p>{part.label}</p>

                <img
                  src={getIconByPeriod(theme, part.label as DayPeriod)}
                  alt={part.label}
                />

                <p>{part.temp}°C</p>
              </div>
            ))}
          </div>

          <div className={styles["weather-statistics"]}>
            <div className={styles["stats"]}>
              <p>Wind speed</p>
              <p>{forecast.current.wind_kph} km/h</p>
            </div>
            <div className={styles["stats"]}>
              <p>Sunrise</p>
              <p>{forecast.forecast.forecastday[0].astro.sunrise}</p>
            </div>
            <div className={styles["stats"]}>
              <p>Sunset</p>
              <p>{forecast.forecast.forecastday[0].astro.sunset}</p>
            </div>
            <div className={styles["stats"]}>
              <p>Humidity</p>
              <p>{forecast.current.humidity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
