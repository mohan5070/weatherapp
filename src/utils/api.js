const API = {
    ROOT_PATH: 'https://api.openweathermap.org/',
    WEATHER: 'data/2.5/weather',
    IMAGE_PATH: 'img/w/',
    CONFIG: {
        appId: '31f547c9556f6eee6c5bd2476c8103b8',
        units: 'metric'
    }
};

export const getWeatherApiUrl = (lat, lng) => {
    return API.ROOT_PATH + API.WEATHER + '?lat=' + lat + '&lon=' + lng + '&appid=' + API.CONFIG.appId + '&units=' + API.CONFIG.units;
}
export const getImageUrl = (iconName) => {
    return API.ROOT_PATH + API.IMAGE_PATH + iconName + '.png';
}