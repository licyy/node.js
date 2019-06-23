//思路：通过文件读取将页面渲染出来

//1:导入模块
const http = require("http")
const fs = require("fs")
const path = require("path")

//2:创建服务器对象
const server = http.createServer()
//3:给服务器对象绑定请求事件
server.on("request", (req, res) => {
    //获取发送请求的地址
    const url = req.url

    //所有的链接都是根据127.0.0.1既根目录day03来的
    if (url === "/" || url === "index.html") {
        //通过fs.readFile()获取index.html文件中的类容
        //通过res.end()方法渲染到界面上
        fs.readFile(path.join(__dirname, "./views/index.html"), (err, data) => {
            if (err) return res.end("404 NOT FIND PAGE")
            res.end(data)
        })
    } else if (url === "/movie.html") {
        fs.readFile(path.join(__dirname, "./views/movie.html"), (err, data) => {
            if (err) return res.end("404 NOT FIND PAGE")
            res.end(data)
        })
    } else if (url === "/about.html") {
        fs.readFile(path.join(__dirname, "./views/about.html"), (err, data) => {
            if (err) return res.end("404 NOT FIND PAGE")
            res.end(data)
        })
    } else if (url === "/css/1.css") {
        fs.readFile(path.join(__dirname, "/css/1.css"), (err, data) => {
            if (err) return res.end("404 NOT FIND PAGE")
            res.end(data)
        })
    } else if (url === "/js/1.js") {
        // fs.readFile(path.join(__dirname, "/css/1.js"), (err, data) => {
        //     if (err) return res.end("404 NOT FIND PAGE")
        //     res.end(data)
        // })

        //所有的链接都是根据127.0.0.1既根目录day03来的
        fs.readFile(path.join(__dirname, url), (err, data) => {
            if (err) return res.end("404 NOT FIND PAGE")
            res.end(data)
        })
    } else {
        res.end("404 NOT FIND PAGE")
    }

})
//4:监听启动服务器
server.listen(3000, "127.0.0.1", function () {
    console.log("server running at http://127.0.0.1:3000");

})