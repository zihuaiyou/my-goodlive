const express = require('express');
const router = express.Router();
const homehot = require('./data/home/homehot');
const hotCityList = require('./data/city/hotCityList')
const cityData = require('./data/city/city.json')
const searchData = require('./data/search')
const url = require('url');

router.get('/home/hot1', (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName;
    res.send({
        status: 200,
        result: homehot.hot1,
        cityName
    })
})

router.get('/home/hot2', (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName;
    res.send({
        status: 200,
        result: homehot.hot2,
        cityName
    })
})

router.get('/city/hotCityList', (req, res) => {
    res.send({
        status: 200,
        result: hotCityList
    })
})

router.get('/city/cityData', (req, res) => {
    res.send({
        status: 200,
        result: cityData
    })
})

router.get('/search', (req, res) => {
    const keywords = url.parse(req.url,true).query.search
    res.send({
        status: 200,
        result: searchData,
        // search
    })
    console.log(keywords);
    
    
})

module.exports = router;