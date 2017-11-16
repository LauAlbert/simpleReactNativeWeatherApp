import axios from 'axios';
import qs from 'qs';
import { API_KEY } from './api_key';

import {
    FETCH_TODAY,
    FETHC_FIVE
} from './types';

const ROOT_URL_TODAY = 'https://api.openweathermap.org/data/2.5/weather?';
const ROOT_URL_FIVE = 'https://api.openweathermap.org/data/2.5/forecast?';

const REQUEST_QUERY = {
    appid: API_KEY,
    units: "imperial"
}

export const fetchTodayWeather = (city) => async (dispatch) => {
    try {
        const url = `${ROOT_URL_TODAY}${qs.stringify({...REQUEST_QUERY, q: city})}`;
        let { data } = await axios.get(url)
        dispatch({type: FETCH_TODAY, payload: data});
        // console.log(data);
    } catch(e) {
        console.error(e)
    }
}

export const fetchFiveWeather = (city) => async (dispatch) => {
    try {
        const url = `${ROOT_URL_FIVE}${qs.stringify({...REQUEST_QUERY, q: city})}`;
        let { data } = await axios.get(url)
        dispatch({type: FETCH_FIVE, payload: data});
    } catch(e) {
        console.error(e)
    }
}

