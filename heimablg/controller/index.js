//这里是index路由模块的事件处理函数模块
const showIndex = (req, res) => {
    res.render("index.ejs", {
        //页面只要加载就会就会经过session中间件，创建req.session
        //只有当用户登陆之后，才会创建req.session.isLogin和req.session.user
        isLogin: req.session.isLogin,
        user: req.session.user
    })
}

//暴露index路由模块的事件处理函数模块
module.exports = {
    showIndex,
}