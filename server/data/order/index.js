
module.exports = [
    /**
     * 评价详情
     * 0 ： 未评价
     * 1 ： 评价中
     * 2 ： 已评价
     */
    {
        id:Math.random().toString().slice(2),
        title:"东城区 安外大街3号院",
        houseType:"1居室 48m²",
        price:"4800",
        rentType:'整租',
        commentState:0,
        img:'http://iwenwiki.com/api/livable/shop/z1.jpg'
    },
    {
        id:Math.random().toString().slice(2),
        title:"海淀区 大牛坊三期",
        houseType:"2居室 72m²",
        price:"2800",
        rentType:'合租',
        commentState:2,
        img:'http://iwenwiki.com/api/livable/shop/z5.jpg'
    },
    {
        id:Math.random().toString().slice(2),
        title:"海淀区 友谊家园二期",
        houseType:"3居室 80m²",
        price:"8000",
        rentType:'整租',
        commentState:0,
        img:'http://iwenwiki.com/api/livable/shop/z6.jpg'
    },
]