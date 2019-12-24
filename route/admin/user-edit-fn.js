const validateUser = require('./joi');
const hash  =require('../../utils/rule')
const { User } = require('../../model/user')
module.exports = async (req, res,next) => {
    // res.send(req.body)

    try {
        await validateUser(req.body);
    } catch (err) {
        // return await res.redirect(`/admin/user-edit?message=${err.message}`)
        return next(JSON.stringify({path:'/admin/user-edit',message:err.message}));

    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return next(JSON.stringify({path:'/admin/user-edit',message:'此邮箱已被注册'}));
    }
        //重新赋值
       req.body.password = hash(req.body.password);
        //添加用户到数据库
        await User.create(req.body);
        res.redirect('/admin/user');
}