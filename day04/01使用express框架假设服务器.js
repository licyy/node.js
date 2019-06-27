//安装express框架
//express框架是基于node.js上的一个框架，封装了一些http的方法
//下面是原生和express框架使用对比

//1:导入express模块
const express = require("express")
//  const http=require("http")

//2:调用express服务器对象
const app = express()
//  const server=http.createServer()

//3:调用get()或者post()方法接收get请求或则post请求
app.get("/", (req, res) => {
    res.end("hellow world")
})

// server.on("request",(req,res)=>{
//     res.end("hello")
// })

//4:监听请求启动服务器
app.listen(3000, "127.0.0.1", () => {
    console.log("server running at http://127.0.0.1:3000");

})