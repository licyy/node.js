//1:引入模块
const http = require("http")
const path = require("path")

//导入remplate模块
const template=require("art-template")

//2:创建server服务器对象
const server = http.createServer()
//3:绑定请求事件
server.on("request", (req, res) => {
    //获取当前请求url
    const url = req.url
    //用模板引擎渲染数据
    if (url === "/") {

        let user = {
            "name": "maybe",
            "age": "22",
            "hobby": ["吃饭", "睡觉", "玩小可"]

        }
        //npm init 初始化 nmp i art-template -S下载
        let html = template(path.join(__dirname,"./views/模板.html"), user)
        res.end(html)
    }

})
//4:监听启动服务器
server.listen(3000, "127.0.0.1", () => {

    console.log("server running at http://127.0.0.1:3000");

})