module.exports=(req, res) => {
    //删除session
    req.session.destroy(()=>{
        //删除cookie
            res.clearCookie('connect.sid');
            //重定向回登录页面
            res.redirect('/admin/login')
    })

}