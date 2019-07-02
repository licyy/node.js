//有操作数据库的函数，所以引入数据库模块
const conn = require("../mysql/mysql.js")
//导入事件处理模块
const moment = require("moment")
//导入marked模块，将markdown文本转换成html文本
const marked = require("marked")


//展示文章界面
const showArticle = (req, res) => {
    if (!req.session.isLogin) return res.redirect("/")
    res.render("./article/add.ejs", {
        isLogin: req.session.isLogin,
        user: req.session.user
    })
}

//添加文章
const addArticle = (req, res) => {
    //获取前台传递的信息
    let data = req.body
    //人为添加ctime
    data.ctime = moment().format("YYYY-MM-DD hh:mm:ss")
    // console.log(data);


    //编写sql语句，将文章添加到数据库
    const sql = `insert into article set ?`
    conn.query(sql, data, (err, result) => {
        if (err) return res.send({
            "status": "201",
            "msg": "查询语句错误" + err
        })
        //console.log(result);

        res.send({
            "status": "200",
            "msg": "ok",
            //将文章id发送给客户端，客户端根据文章id发送请求获取详情
            "articleId": result.insertId
        })
    })
}

//显示文章详情页
const infoArticle = (req, res) => {
    // if (!req.session.isLogin) return res.redirect("/")
    //获取客户端请求路径中的文章id
    let articleId = req.params.id
    //根据文章id获取文章内容
    //编写sql语句
    const sql = `select * from article where id=${articleId}`
    conn.query(sql, (err, result) => {
        if (err) return res.send({
            "status": "500",
            "msg": "查询语句出错" + err
        })
        let data = result
        // console.log(data);

        //调用marked模块将markdown文本转换成惠特米勒文本
        data[0].content = marked(data[0].content)
        res.render("./article/info.ejs", {
            "isLogin": req.session.isLogin,
            "user": req.session.user,
            "articleId": articleId,
            "data": data
        })

    })

}

//显示文章编辑页面
const showEditArticle = (req, res) => {
    //登陆验证
    if (!req.session.isLogin) return res.redirect("/")
    //获取文章id
    let articleId = req.params.id
    //根据文章id获取文章内容
    const sql = `select * from article where id=${articleId}`
    conn.query(sql, (err, result) => {
        if (err) return res.send({
            "status": "500",
            "msg": "查询语句出错" + err
        })
        let data = result
        // console.log(data);
        res.render("./article/edit.ejs", {
            "isLogin": req.session.isLogin,
            "user": req.session.user,
            "articleId": articleId,
            "data": data
        })
    })
}

//根据文章id修改文章内容
const editArticle = (req, res) => {
    //先验证登陆
    if (!req.session.isLogin) return res.redirect("/")
    //获取post传递过来的文章id
    let articleId=req.params.id
    //编写sql语句，根据文章id修改文章内容
    console.log(req.body);

    let sql=`update article set ? where id=${articleId}`
    conn.query(sql,req.body,(err,result)=>{
        if(err) return res.send({
            "status": "500",
            "msg": "查询语句出错" + err
        })
        // console.log(result);
        if(result.affectedRows!=1) return res.redirect("/")
        let data = result
        // console.log(data);
        res.send({
            "status":"200",
            "msg":"ok",
            "data":data,
            "articleId":articleId
        })
    })



}

module.exports = {
    showArticle,
    addArticle,
    infoArticle,
    showEditArticle,
    editArticle
}