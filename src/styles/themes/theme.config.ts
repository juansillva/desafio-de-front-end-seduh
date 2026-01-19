import arrowdown_black from "../../assets/icons/arrow-down-black.svg";
import arrowdown_white from "../../assets/icons/arrow-down-white.svg";
import arrowup_black from "../../assets/icons/arrow-up-black.svg";
import arrowup_white from "../../assets/icons/arrow-up-white.svg";
import cloud_sun_black from "../../assets/icons/bacloud_sun_black.svg";
import cloud_sun_white from "../../assets/icons/bacloud_sun_white.svg";
import moon_black from "../../assets/icons/bsmoon_black.svg";
import moon_white from "../../assets/icons/bsmoon_white.svg";
import sun_black from "../../assets/icons/sun_black.svg";
import sun_white from "../../assets/icons/sun_white.svg";

export type ThemeType = "clear" | "snow";

interface Forecast {
  current?: { condition?: { code?: number; text?: string }; temp_c?: number };
}

export const getThemeByWeather = (forecast: Forecast): ThemeType => {
  const code = forecast?.current?.condition?.code;
  const temp = forecast?.current?.temp_c ?? 999;

 
  const snowCodes = [
    1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222,
    1225,
  ];

  return snowCodes.includes(code ?? -1) || temp <= 0 ? "snow" : "clear";
};

type ThemeIcons = {
  sun: string;
  cloudSun: string;
  moon: string;
  arrowUp: string;
  arrowDown: string;
};

export const THEME_CONFIG: Record<ThemeType, { icons: ThemeIcons }> = {
  clear: {
    icons: {
      sun: sun_white,
      cloudSun: cloud_sun_white,
      moon: moon_white,
      arrowUp: arrowup_white,
      arrowDown: arrowdown_white,
    },
  },
  snow: {
    icons: {
      sun: sun_black,
      cloudSun: cloud_sun_black,
      moon: moon_black,
      arrowUp: arrowup_black,
      arrowDown: arrowdown_black,
    },
  },
};

export type DayPeriod = "Dawn" | "Morning" | "Afternoon" | "Night";

export const getIconByPeriod = (theme: ThemeType, period: DayPeriod) =>
  period === "Night"
    ? THEME_CONFIG[theme].icons.moon
    : period === "Morning"
    ? THEME_CONFIG[theme].icons.sun
    : THEME_CONFIG[theme].icons.cloudSun;
