const {Article} =require('../../model/article');
const pages =require('mongoose-sex-page')
module.exports = async (req, res) => {
    let page =req.query.page;
    let articles = await pages(Article).find().page(page).size(4).display(2).populate('author').exec();
    res.render('home/default', {
        articles:articles
    });
}