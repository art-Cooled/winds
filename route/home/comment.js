const Comment = require('../../model/comment');
module.exports = async (req, res) => {
    let { uid, aid,content } = req.body;
    await Comment.create({
        uid,
        aid,
        content,
        time: new Date()
    })
    res.redirect('/home/article?id='+aid);
}