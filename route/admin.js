const express = require('express');
const { User } = require('../model/user')
const admin = express.Router();
//引入session
const session = require('express-session');
//登录功能
admin.get('/login', require('./admin/loginPage'));
//登录验证功能
admin.post('/login', require('./admin/login'));
//退出功能
admin.get('/logout', require('./admin/logout'));
//创建用户列表路由
admin.get('/user', require('./admin/userPage'));
//创建新增用户路由
admin.get('/user-edit', require('./admin/user-edit'));
//新增用户校验
admin.post('/user-edit', require('./admin/user-edit-fn'));
//添加用户修改路由
admin.post('/user-modify', require('./admin/user-modify-fn'));
//添加删除路由
admin.get('/delete', require('./admin/user-delete-fn'));
//创建文章列表路由
admin.get('/article', require('./admin/article'));
//创建文章发表路由
admin.get('/article-edit', require('./admin/article-edit'));
//文章发表校验
admin.post('/article-edit', require('./admin/article-add'));
// admin.get('/user',require('./admin/joi'))
module.exports = admin;