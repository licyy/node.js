//1:导入http模块
const http = require("http")
//2:通过createServer()方法创建服务器对象
const server = http.createServer()
//3:为服务器绑定请求事件    req(request)表示请求数据     res(response)表示响应数据
//onrequest请求事件     事件处理函数
server.on("request", function (req, res) {

    //解决中文乱码问题：设置响应头  200表示接收数据成功
    res.writeHeader(200, {
        //MIME类型格式：text/html
        "content-type": "text/plain;charset=utf-8"
        //php中解决中文乱码header("content-type:text/html;charset=utf-8")
    })

    //end()方法处理响应结果
    res.end("HELLO WORLD")
})
//4:开启服务器，设置接口参数
server.listen(3000, "127.0.0.1", function () {
    console.log("server running at http://127.0.0.1:3000");

})