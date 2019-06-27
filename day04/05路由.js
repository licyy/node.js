//1:导入express模块
const express = require("express")

//2:调用express服务器对象
const app = express()

//导入路由模块,路由模块中有暴露出来的路由对应关系
const router = require("./router.js")

//使用路由模块
app.use(router)

//3:监听客户端发送过来的请求，服务器做出响应
//客户端发送过来的请求，和服务器响应函数这种对应关系就是路由
// app.get("movie", (req, res) => {
//     res.sendFile("./view/movie.html", {
//         root: __dirname
//     })
// })

// app.get("about", (req, res) => {
//     res.sendFile("./view/about.html", {
//         root: __dirname
//     })
// })


//4:监听请求启动服务器
app.listen(3000, "127.0.0.1", () => {
    console.log("server running at http://127.0.0.1:3000");

})