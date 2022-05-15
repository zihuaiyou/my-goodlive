import {
    INIT_CITY, CHANGE_CITY, UPDATE_SEARCH_INPUT,
    SET_LOGIN, OUT_LOGIN, COLLECT, UNCOLLECT
} from '../constants';

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

export const setLoginAction = (user) => {
    return {
        type: SET_LOGIN,
        user: {
            username: user.username,
            token: user.token
        }
    }
}

export const outLoginAction = () => {
    return {
        type: OUT_LOGIN,
    }
}
// 收藏商品的action
export const setCollectAction = (id) => {
    return {
        type: COLLECT,
        collect:id
    }
}
// 取消收藏商品的action
export const unCollectAction = (id) => {
    return {
        type: UNCOLLECT,
        collect:id
    }
}

