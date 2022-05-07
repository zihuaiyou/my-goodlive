import { INIT_CITY, CHANGE_CITY } from '../constants';

export const initCityAction = (cityName) => {
    return {
        type:INIT_CITY,
        cityName
    }
}
export const changeCityAction = (cityName) => {
    return {
        type:CHANGE_CITY,
        cityName
    }
}
