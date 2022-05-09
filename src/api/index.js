import axios from '../utils/request'
const base = {
    baseUrl: "http://localhost:5566",
    homehot1: "/api/home/hot1",
    homehot2: "/api/home/hot2",
    hotCityList: "/api/city/hotcitylist",
    cityData: "/api/city/cityData",
    searchData: "/api/search"
}
const api = {
    // 获取首页热门产品1
    getHomeHot1(params) {
        return axios.get(base.baseUrl + base.homehot1, {
            params
        })
    },
    // 获取首页热门产品1
    getHomeHot2(params) {
        return axios.get(base.baseUrl + base.homehot2, {
            params
        })
    },
    // 获取热门城市列表
    getHotCityList(params) {
        return axios.get(base.baseUrl + base.hotCityList, {
            params
        })
    },
    // 获取城市目录
    getCityData() {
        return axios.get(base.baseUrl + base.cityData)
    },
    getSearchData(params) {
        return axios.get((base.baseUrl + base.searchData), {
            params
        })
    }
}

export default api;