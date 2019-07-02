//这里是index路由模块的事件处理函数模块

//导入mysql数据库模块
const conn = require("../mysql/mysql.js")



//显示首页处理函数
const showIndex = (req, res) => {
    res.render("index.ejs", {
        //页面只要加载就会就会经过session中间件，创建req.session
        //只有当用户登陆之后，才会创建req.session.isLogin和req.session.user
        isLogin: req.session.isLogin,
        user: req.session.user
    })
}

//这里是获取文章列表的处理函数
const getList = (req, res) => {
    // 不登陆也能看到
    // 编写sql语句
    const sql = "select a.id,a.title,a.content,a.ctime,u.nickname from article a LEFT JOIN user u on a.authorId=u.id"
    conn.query(sql, (err, result) => {
        if (err) return res.send({
            "status": "500",
            "msg": "数据库获取信息失败" + err
        })

        res.send({
            "status": "200",
            "msg": "ok",
            "data": result
        })
    })

}

//暴露index路由模块的事件处理函数模块
module.exports = {
    showIndex,
    getList
}