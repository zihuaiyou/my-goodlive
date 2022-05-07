import { INIT_CITY, CHANGE_CITY } from '../constants';

const initState = {
    cityName: '北京'
}
const city = (preState = initState, action) => {
    const { type, cityName } = action
    switch (type) {
        case INIT_CITY:
            return {
                cityName
            }
        case CHANGE_CITY:
            return {
                cityName
            }
        default:
            return preState
    }
}
export default city