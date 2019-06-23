//所谓简化，就是在输入网址既url时，手动加上需要加载的文件的上级目录，这样url==需要跳转的页面了
//简化前输入网址127.0.0.1:3000/movie.html----->url==/movie.html
//简化后输入网址127.0.0.1:3000/views/movie.html---->url==views/movie.html
//读取文件中的地址path.join(__dirname,"/views/movie.html"),既用url替换了"/views/movie.html"

//127.0.0.1:3000指向根目录day03

//1:导入模块
const http = require("http")
const fs = require("fs")
const path = require("path")
//2:创建服务器对象
const server = http.createServer()
//3:绑定请求事件
server.on("request", (req, res) => {
    //获取请求地址
    let url = req.url
    if (url === "/") url = "/views/index.html"
    fs.readFile(path.join(__dirname, url), (err, data) => {
        if (err) return res.end("404")
        return res.end(data)
    })
})
//4:监听启动服务器
server.listen(3000, "127.0.0.1", function () {
    console.log("http://127.0.0.1:3000");

})