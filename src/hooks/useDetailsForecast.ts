/**
 * useDetailsForecast
 *
 * Hook responsável por orquestrar os dados da tela de detalhes do clima.
 * Ele centraliza quatro responsabilidades principais:
 *
 * 1. Recuperar o forecast enviado via navegação (React Router state),
 *    garantindo que a tela só seja acessada com dados válidos.
 *
 * 2. Derivar o tema visual (clear | snow) a partir das condições climáticas,
 *    abstraindo regras de negócio relacionadas a clima e aparência.
 *
 * 3. Normalizar os dados de previsão por períodos do dia
 *    (Dawn, Morning, Afternoon, Night), mapeando horários específicos
 *    da API para um formato consumível pela UI.
 *
 * 4. Expor estilos e ícones derivados do tema para manter a tela desacoplada
 *    de regras de decisão e focada apenas em renderização.
 *
 * Este hook atua como um "orquestrador de domínio" da tela de Details,
 * reduzindo a complexidade do componente e melhorando legibilidade,
 * reutilização e testabilidade.
 */

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getThemeByWeather, THEME_CONFIG } from "../styles/themes/theme.config";

const HOURS_MAP = {
  Dawn: "03:00",
  Morning: "09:00",
  Afternoon: "15:00",
  Night: "21:00",
};

export const useDetailsForecast = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const forecast = state?.forecast;

  // redirecionamento em efeito (não durante render)
  useEffect(() => {
    if (!forecast) {
      navigate("/", { replace: true });
    }
  }, [forecast, navigate]);

  if (!forecast) return null;

  const theme = getThemeByWeather(forecast);
  const icons = THEME_CONFIG[theme].icons;

  const hours =
    forecast?.forecast?.forecastday?.[0]?.hour ??
    ([] as { time?: string; temp_c?: number; condition?: any }[]);

  const dayParts = Object.entries(HOURS_MAP).map(([label, time]) => {
    const hourData = hours.find((h: { time?: string }) =>
      h.time?.endsWith(time),
    );
    return {
      label,
      temp: hourData?.temp_c ?? null,
    };
  });

  const themeStyles = {
    "--bg-color": theme === "snow" ? "#CACACA" : "#2CAEFF",
    "--text-color": theme === "snow" ? "#000" : "#F9F9F9",
  } as React.CSSProperties;

  return {
    forecast,
    theme,
    icons,
    dayParts,
    themeStyles,
  };
};
