const express = require('express');
const home = express.Router();
//引入首页展示页面路由
home.get('/', require('./home/index'))
//引入详情页面路由
home.get('/article',require('./home/article'));
home.post('/comment',require('./home/comment'))
module.exports = home;