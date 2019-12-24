const {Article} =require('../../model/article')
module.exports = async (req, res) => {
    //标识 标识当前页面为文章管理页面
    req.app.locals.current='article';
    // res.render('admin/article-edit', {})
    const { message, id } = req.query;
    if (id) {
        let article = await Article.findOne({ _id: id });
        // res.send(article);
        // return
        res.render('admin/article-edit', {
            message: message,
            article,
            button: '修改',
            link: '/admin/article-modify?id=' + id,
            uid: req.session.userid
            
        })
    } else {
        res.render('admin/article-edit', {
            message: message,
            button: '添加',
            link: '/admin/article-edit',
            uid: req.session.userid
        })

    }
}