//1:导入http模块
const http = require("http")
//2:创建服务器对象
const server = http.createServer()
//3:给服务器绑定请求事件
server.on("request", (req, res) => {
    //获取请求地址，
    let url = req.url
    //解决中文乱码，设置请求头
    res.writeHeader(200, {
        "content-type": "text/plain;charset=utf-8"
    })
    //根据不同请求地址返回不同结果
    if (url === "/" || url === "index.html") {
        res.end("首页")
    } else if (url === "/movie.html") {
        res.end("电影")
    } else if (url === "/about.html") {
        res.end("关于")
    } else {
        res.end("没有相关网页")
    }
})
//4:监听启动服务器，绑定访问接口和地址
server.listen(3000, "127.0.0.1", function () {
    console.log("server running at http://127.0.0.1:3000");
})