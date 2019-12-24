const { Article } = require('../../model/article');
const Comment  = require('../../model/comment')
module.exports = async (req, res) => {
    let id = req.query.id;
    const article = await Article.findOne({ _id: id }).populate('author');
    let comment = await Comment.find({aid: id }).populate('uid');
    res.render('home/article', {
        article,
        username: req.session.username,
        userid: req.session.userid,
        comment
    });
}