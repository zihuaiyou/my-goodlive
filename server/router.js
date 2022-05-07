const express = require('express');
const router = express.Router();
const homehot = require('./data/home/homehot');
const hotCityList = require('./data/city/hotCityList')
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

module.exports = router;