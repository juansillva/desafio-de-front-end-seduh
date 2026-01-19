import { api} from './api';

const API_KEY = import.meta.env.VITE_API_KEY

export const getForecast = async (lat:number,lon:number) => {

    const weather = await api.get('/forecast.json',{
        params:{
            key: API_KEY,
            q: `${lat}, ${lon}`,
            days: 1,
            lang: 'en'
        }
    })

    return weather.data;

}
