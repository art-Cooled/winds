const { User } = require('../../model/user')
module.exports = async (req, res) => {
    const id = req.query.id;
    const user = await User.findOneAndDelete({ _id: id });
    res.redirect('/admin/user');
}