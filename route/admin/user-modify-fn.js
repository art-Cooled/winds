const { User } = require('../../model/user');
const hash = require('../../utils/rule')
module.exports = async (req, res, next) => {
    let id = req.query.id;
    let { password, email, role, state, username } = req.body;
    const user = await User.findOne({ _id: id });
    if (hash(password) == user.password) {
        //如果比对成功可以修改
        await User.updateOne({ _id: id }, {
            username, email, role, state
        });
        res.redirect('/admin/user')
    } else {
        //比对不成功，触发错误中间件
        next(JSON.stringify({ path: '/admin/user-edit', message: '您输入的密码错误', id }))
    }
}