//这里是用户路由模块的事件处理函数模块


//导入链接服务器模块
const conn = require("../mysql/mysql.js")

//导入事件处理模块
const moment = require("moment")

//导入加密的模块
const bcrypt = require("bcrypt")

//定义加密幂次
const saltRounds = 10

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
        // console.log(result);    //用户名条数

        if (result[0].count != 0) return res.send({
            "status": 502,
            "msg": "用户名重复"
        })
        console.log(data.password);

        //在传入数据库之前将用户密码进行加密
        bcrypt.hash(data.password, saltRounds, (bcrypterr, pwdCryoed) => {
            if (bcrypterr) return res.send({
                "status": "506",
                "msg": "密码加密错误" + bcrypterr
            })
            console.log(pwdCryoed);

            //将加密后的密码保存
            data.password = pwdCryoed

            //sql语句是异步执行的，所以要放进{}里面
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




    })


}

//验证登陆
const login = (req, res) => {

    //1:获取从前端传递过来的数据
    let data = req.body

    //密码是经过加密的,先对密码进行比较
    //先根据用户名从服务器获取保存的密码
    let sql1 = `select password from user where username=?`
    conn.query(sql1, data.username,(err,result) => {
        //判断查询是否错误
        if (err) return res.send({
            "status": 505,
            "msg": `查询语句错误${err}`,
        })

        // console.log(result[0].password);

        //走到这里表示能获取数据，对比获取到的密码
        bcrypt.compare(data.password, result[0].password, (bcrypterr, istrue) => {
            if (bcrypterr) return res.send({
                "status": "506",
                "msg": "密码比骄错误" + bcrypterr
            })

            // console.log(istrue);

            //如果两个密码不一样
            if(!istrue) return res.send({
                "status": "507",
                "msg": "密码错误" + bcrypterr
            })

            //如果两个密码一样istrue==true
            if (istrue) {
                //2:编写查找数据的sql语句,数据库有信息可以登陆
                let sql = "select * from user where username=?"
                //执行语句
                conn.query(sql, data.username, (err, result) => {
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