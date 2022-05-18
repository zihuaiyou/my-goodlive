const express = require('express');
const router = express.Router();
const homehot = require('./data/home/homehot');
const hotCityList = require('./data/city/hotCityList')
const cityData = require('./data/city/city.json')
const url = require('url');
//使用mock模拟后端数据
const Mock = require('mockjs');
const Random = Mock.Random;
const detailData = require('./data/details')
const commentData = require('./data/comment')
const orderData = require('./data/order');

// 首页热门商品的接口
router.get('/home/hot1', (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName;
    res.send({
        status: 200,
        result: homehot.hot1,
        cityName
    })
})

// 首页新品推荐的接口
router.get('/home/hot2', (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName;
    res.send({
        status: 200,
        result: homehot.hot2,
        cityName
    })
})

// 热门城市列表的接口
router.get('/city/hotCityList', (req, res) => {
    res.send({
        status: 200,
        result: hotCityList
    })
})

// 城市列表的接口
router.get('/city/cityData', (req, res) => {
    res.send({
        status: 200,
        result: cityData
    })
})

// 搜索页的接口
router.get('/search', (req, res) => {
    let mockData = Mock.mock({
        'hasMore': true,
        'data|5': [{
            'id': Random.integer(),
            'title': Random.csentence(3, 8),
            'houseType': "17/19层| 4室1厅 - 273.97 ㎡",
            'price': "<h3>130000</h3>",
            'rentType': Random.cword(2),
            'img': Random.image('800x600', Random.color(), Random.color(), Random.cword(2, 5))
        }]
    })
    const keywords = url.parse(req.url, true).query.search
    res.send({
        status: 200,
        result: mockData,
        // search
    })
    console.log(keywords);
})

// 搜索详情页
router.get('/details', (req, res) => {
    const id = url.parse(req.url, true).query.id;
    console.log(id);
    res.send({
        status: 200,
        result: detailData
    })
})


//登录信息的接口
router.post('/login', (req, res) => {
    //引入的body-parser中间件生成req.body并解析
    const { username, password } = req.body;
    if (username && password) {
        res.send({
            status: 200,
            username,
            token: "ahsduilha.dhusaildhioa.ailahdan"
        })
    } else {
        res.send({
            status: 400,
            msg: "用户名或密码错误"
        })
    }
})

// 请求评论数据的接口
router.get('/comment', (req, res) => {
    const id = url.parse(req.url, true).query.id;
    console.log(id);
    res.send({
        status: 200,
        result: commentData
    })
})

// 请求订单信息的接口
router.get('/order/comment', (req, res) => {
    const username = url.parse(req.url,true).query.username
    console.log(username);
    res.send({
        status: 200,
        result: orderData
    })
})

// 提交订单评价信息的接口
router.post('/order/submit',(req,res) => {
    const {username,id,comment} = req.body;
    console.log(username,id,comment);
    res.send({
        status: 200,
        msg: "订单评价成功"
    })
})

module.exports = router;