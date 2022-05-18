import axios from '../utils/request'
const base = {
    baseUrl: "http://localhost:5566",
    homehot1: "/api/home/hot1",
    homehot2: "/api/home/hot2",
    hotCityList: "/api/city/hotcitylist",
    cityData: "/api/city/cityData",
    searchData: "/api/search",
    details: "/api/details",
    login: "/api/login",
    comment: "/api/comment",
    orderComment: "/api/order/comment",
    submitOrderComment: "/api/order/submit"
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
    },
    // 获取搜索详情页数据
    getDetailData(params) {
        return axios.get((base.baseUrl + base.details), {
            params
        })
    },
    //提交登录信息
    postLoginData(params) {
        return axios.post(base.baseUrl + base.login, params)
    },
    //请求评论信息
    getCommentData(params) {
        return axios.get(base.baseUrl + base.comment, {
            params
        })
    },
    //请求订单信息
    getOrderData(params) {
        return axios.get(base.baseUrl + base.orderComment, {
            params
        })
    },
    // 
    postOrderComment(params) {
        return axios.post(base.baseUrl + base.submitOrderComment, params
        )
    }
}

export default api;