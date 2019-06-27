//导入模块
const express = require("express")
//创建 路由对象
const router = express.Router()
//设置路由对应关系
router.get("/movie", (req, res) => {
    res.sendFile("./view/movie.html", {
        root: __dirname
    })
})

router.get("/about", (req, res) => {
    res.sendFile("./view/about.html", {
        root: __dirname
    })
})

//将路由对象暴露出去，方便外界调用
module.exports = router