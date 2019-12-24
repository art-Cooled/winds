const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article')
module.exports = (req, res) => {
    //创建表单解析对象
    let form = new formidable.IncomingForm();
    //配置上传文件传人的位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    //设置传入资源的后缀名是否保留
    form.keepExtensions = true;
    //解析传入的表单数据
    form.parse(req, function (err, fields, files) {
        let { title,
            author,
            publishDate,
            content } = fields
        Article.create({
            title,
            author,
            publishDate,
            cover: files.cover.path.split('public')[1],
            content
        })
        res.redirect('/admin/article');
    });

}