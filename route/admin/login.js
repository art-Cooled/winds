const { User } = require('../../model/user')
const hash =require('../../utils/rule')
module.exports = async (req, res) => {
    // res.send(req.body)
    // return
    const { email, password } = req.body;
    console.log(hash(password));
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin / error', {
            msg: '您输入的邮箱或者密码不正确'
        })
    }
    let user = await User.findOne({ email })
    // res.send(user)
    // return
    // console.log(user.username);
    // console.log(user.password);

    if (user) {
        //证明邮箱存在
        
        console.log(user.password);
        
        if (hash(password) === user.password) {
            // res.send('登录成功')
            //验证用户名是否一致
            req.session.username = user.username;
            req.session.role=user.role;
            req.session.userid = user._id;
            if(req.session.role==='normal') {
                res.redirect('/home');
            } else {
                res.redirect('/admin/user')
            }
        } else {
            res.status(400).render( 'admin/error', {
                msg: '您的邮箱或者密码错误，请重新输入',
            })
        }
    } else {
        res.status(400).render('admin/error', {
            msg: '此用户不存在'
        })
    }
}