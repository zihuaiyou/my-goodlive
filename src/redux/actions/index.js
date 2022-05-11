import { INIT_CITY, CHANGE_CITY, UPDATE_SEARCH_INPUT } from '../constants';

export const initCityAction = (cityName) => {
    return {
        type: INIT_CITY,
        cityName
    }
}
export const changeCityAction = (cityName) => {
    return {
        type: CHANGE_CITY,
        cityName
    }
}

export const updateSearchAction = (searchTerm) => {
    return {
        type: UPDATE_SEARCH_INPUT,
        searchTerm
    }
}
