// 创建用户集合
// 引入mongoose第三方模块
const mongoose = require('mongoose');
const hash=require('../utils/rule');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	},
	email: {
		type: String,
		// 保证邮箱地址在插入数据库时不重复
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	// admin 超级管理员
	// normal 普通用户
	role: {
		type: String,
		required: true
	},
	// 0 启用状态
	// 1 禁用状态
	state: {
		type: Number,
		default: 0
	}
});

// 创建集合
const User = mongoose.model('User', userSchema);

//  User.create({
// 		username: 'iteheima',
// 		email: 'itheima@itcast.cn',
// 		password: hash('12345'),
// 		role: 'admin',
// 		state: 0
// 	});
// 将用户集合做为模块成员进行导出
module.exports = {
	User
}