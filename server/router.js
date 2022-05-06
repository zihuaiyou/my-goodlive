const express = require('express');
const router = express.Router();
const homehot = require('./data/home/homehot');
const hotCityList = require('./data/city/hotCityList')

router.get('/home/hot1',(req,res) => {
    res.send({
        status:200,
        result:homehot.hot1
    })
})

router.get('/home/hot2',(req,res) => {
    res.send({
        status:200,
        result:homehot.hot2
    })
})

router.get('/city/hotCityList',(req,res) => {
    res.send({
        status:200,
        result:hotCityList
    })
})

module.exports = router;