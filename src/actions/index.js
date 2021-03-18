//Action Center

import axios from 'axios';

const API_KEY = '6712faf79ce759566fcf612fb6befc86';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},ban`;
    const request = axios.get(url);

    console.log('Request', request);
    return {
        type : FETCH_WEATHER,
        payload : request
    }
}