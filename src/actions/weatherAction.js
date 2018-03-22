import { getWeatherApiUrl } from "../utils/api";
import axios from "axios";

const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
const RENDER_GEO_CODE_ACCESS = 'RENDER_GEO_CODE_ACCESS';



export const changeBackground = (weather) => {
    return {
        type: CHANGE_BACKGROUND,
        color: getColorCode(weather)
    }
}

export const setInitialState = () => {
    return {
        type: SET_INITIAL_STATE,
        color: '#fff'
    }
}

export const renderGeoCodeSuccess = (weatherResponse) => {
    return {
        type: RENDER_GEO_CODE_ACCESS,
        weather: weatherResponse
    }
}

const colorCodes = {
    sun: '#FDB813',
    rain: '#79cef6',
    snow: '#eee7c8',
    mist: '#cecdb8',
    haze: '#cecdb8',
    plain: '#a09f9c',
    thunderstorm: 'lightred'
}

const getColorCode = (weather) => {
    let sunnyWeatherCode = ['clear sky', 'few clouds'];
    let plainWeatherCode = ['scattered clouds', 'broken clouds'];
    let rainyWeatherCode = ['shower rain', 'rain', 'light rain', 'moderate rain'];
    let others = ['thunderstorm', 'snow', 'mist', 'haze']

    if (sunnyWeatherCode.indexOf(weather) !== -1) {
        return colorCodes.sun;
    }

    if (plainWeatherCode.indexOf(weather) !== -1) {
        return colorCodes.plain;
    }

    if (rainyWeatherCode.indexOf(weather) !== -1) {
        return colorCodes.rain;
    }

    if (others.indexOf(weather) !== -1) {
        return colorCodes[weather];
    }

    return colorCodes.plain;
}


export const fetchWeatherInfo = (lat, lng) => {
    let url = getWeatherApiUrl(lat, lng)
    return (dispatch) => {
        axios.get(url)
            .then(function(response) {
                dispatch(changeBackground(response.data.weather[0].description));
                dispatch(renderGeoCodeSuccess(response.data));
            })
            .catch(function(error) {
                console.log(error);
            });
    }

}