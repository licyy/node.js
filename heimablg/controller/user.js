//这里是用户路由模块的事件处理函数模块


//导入链接服务器模块
const conn = require("../mysql/mysql.js")

//展示登陆页面
const showLogin = (req, res) => {
    res.render("./user/login.ejs", {})
}

//展示注册页面
const showRegister = (req, res) => {
    res.render("./user/register.ejs", {})
}

//注册新用户
const regist = (req, res) => {

    //1:获取从前端传递过来的数据
    let data = req.body

    //给data添加创建时间ctime
    data.ctime = moment().format("YYYY-MM-DD hh:mm:ss")

    //2:对数据进行验证，判断用户名是否重复
    //a:编写验证用户名重复的sql语句
    let sql1 = "select count(*) as count from user where username=?"
    //query()是异步进行的
    //执行语句
    conn.query(sql1, data.username, (err, result) => {
        if (err) return res.send({
            "status": 501,
            "msg": "获取用户名条数信息失败"
        })
        console.log(result);

        if (result[0].count != 0) return res.send({
            "status": 502,
            "msg": "用户名重复"
        })
        console.log(data);

        //b:编写新增数据的sql语句
        let sql2 = "insert into user set ? "
        //执行语句
        conn.query(sql2, data, (err, result) => {
            if (err) return res.send({
                "status": 503,
                "msg": `新增数据信息失败${err}`,
            })
            res.send({
                "status": 200,
                "msg": "ok"
            })

        })

    })


}

//验证登陆
const login = (req, res) => {

    //1:获取从前端传递过来的数据
    let data = req.body

    //2:编写查找数据的sql语句,数据库有信息可以登陆
    let sql = "select * from user where username=? and password=? "
    //执行语句
    conn.query(sql, [data.username, data.password], (err, result) => {
        if (err) return res.send({
            "status": 501,
            "msg": `查询语句错误${err}`,
        })
        //如果数据库中有数据，长度为1，不为1则不能登陆
        console.log(result);

        if (result.length != 1) return res.send({
            "status": 502,
            "msg": `没有查找到改用户${err}`,
        })

        //走到这里表示登陆成功了
        //登陆成功之后，将用户登陆状态和信息保存到session中
        //在渲染页面的时候根据session的状态渲染界面
        req.session.user = result[0]
        req.session.isLogin = "true"
        res.send({
            "status": 200,
            "msg": "ok"
        })

    })

}

//退出登陆,清除session
const loginout = (req, res) => {
    //清除session:   req.session.destroy()
    req.session.destroy(err => {
        if (err) throw err
        //跳转到首页
        res.redirect("/")

    })
}

//暴露用户路由模块的事件处理函数模块
module.exports = {
    showLogin,
    showRegister,
    regist,
    login,
    loginout
}