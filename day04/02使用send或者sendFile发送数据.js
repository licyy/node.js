//1：导入represe模块
const express = require("express")
const path = require("path")
//2:调用创建服务器方法
const app = express()
//3:接收请求
app.get("/", (req, res) => {
    //send()方法可以发送字符串，数组和对象，转换成json格式渲染
    // res.send("123")
    // res.send(["张三",17,"男"])

    //res.rendFile()方法可以发送一个页面
    //res.sendFile(绝对路径)

    // res.sendFile(path.join(__dirname, "view/movie.html"))

    //res.sendFile(相对路径，{root:当前目录路径})
    res.sendFile("view/movie.html", {
        root: __dirname
    })

})
//4：启动服务器
app.listen(3000, "127.0.0.1", () => {
    console.log("server running at http://127.0.0.1:3000");

})