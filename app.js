const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
//引入session
const session = require('express-session');
//引入日期格式
const dateFormat =require('dateformat');
const template = require('art-template');
//配置日期格式
template.defaults.imports.dateFormat = dateFormat;
//引入数据库连接
require('./model/connect');
//配置session
app.use(session({ secret: 'secret key', saveUninitialized: false }))
//开放资源文件
app.use(express.static(path.join(__dirname, 'public')));
//引入config
const config = require('config');
//处理post请求参数
app.use(bodyparser.urlencoded({ extended: false }));
//引入拦截登录
app.use('/admin', require('./middleware/loginGuard'))
//模板配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));
// const User = require('./model/user');
//引入路由模块
const admin = require('./route/admin');
const home = require('./route/home');
//为路由匹配路径
app.use('/home', home);
app.use('/admin', admin);
//监听错误
app.use((err, req, res, next) => {
    let obj = JSON.parse(err);
    let arr = [];
    for (var attr in obj) {
        if (attr != 'path') {
            arr.push(`${attr}=${obj[attr]}`);
        }
    }
    res.redirect(`${obj.path}?${arr.join('&')}`);
});
app.listen(8000, () => {
    console.log('服务器启动成功');
});