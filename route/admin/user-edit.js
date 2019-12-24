const { User } = require('../../model/user')
module.exports = async (req, res) => {
    //标识 标识当前页面为用户管理页面
    req.app.locals.current='user';
    const { message, id } = req.query;
    if (id) {
        let user = await User.findOne({ _id: id });
        res.render('admin/user-edit', {
            message: message,
            user,
            button: '修改',
            link: '/admin/user-modify?id=' + id
            
        })
    } else {
        res.render('admin/user-edit', {
            message: message,
            button: '添加',
            link: '/admin/user-edit',
            username: req.session.username
           
        })

    }

}