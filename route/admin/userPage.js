const { User } = require('../../model/user')
module.exports = async (req, res) => {
    // const users = await User.find();
    //标识 标识当前页面为用户管理页面
    req.app.locals.current='user';
    //当前页码
    let page = req.query.page || 1;
    //数据显示的条数
    let pagesize = 2;
    //数据库相应的数据数量
    let count = await User.countDocuments();
    //总页数
    let totel = Math.ceil(count / pagesize);
    //页面对应的查询位置
    let strat = (page - 1) * pagesize;
    
    let users = await User.find({}).limit(pagesize).skip(strat);
    res.render('admin/user', {
        username: req.session.username,
        users,
        totel,
        page
    });
}