const express = require('express');
const router = express.Router();
const homehot = require('./data/home/homehot');
const hotCityList = require('./data/city/hotCityList')
const cityData = require('./data/city/city.json')
// const searchData = require('./data/search')
const url = require('url');
//使用mock模拟后端数据
const Mock = require('mockjs');
const Random = Mock.Random;
const detailData = require('./data/details/index')

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
        'hasMore':true,
        'data|5': [{
            'id': Random.integer(),
            'title':Random.csentence(3, 8),
            'houseType':"17/19层| 4室1厅 - 273.97 ㎡",
            'price':"<h3>130000</h3>",
            'rentType': Random.cword(2),
            'img':Random.image('800x600', Random.color(), Random.color(),Random.cword(2,5))
        }]
    })
    const keywords = url.parse(req.url,true).query.search
    res.send({
        status: 200,
        result: mockData,
        // search
    })
    console.log(keywords);
    
// 搜索详情页
router.get('/details', (req, res) => {
    const id = url.parse(req.url,true).query.id;
    console.log(id);
    res.send({
        status: 200,
        result: detailData
    })
})
})

module.exports = router;