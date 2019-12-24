const { Article } = require('../../model/article');
const pages = require('mongoose-sex-page');
module.exports = async (req, res) => {
    //标识 标识当前页面为文章管理页面
    req.app.locals.current = 'article';
    let page = req.query.page || 1;
    let articles = await pages(Article).find().page(page).size(3).display(2).populate('author').exec();
    res.render('admin/article', {
        articles,
        username:req.session.username,
        uid: req.session.userid
    })
}