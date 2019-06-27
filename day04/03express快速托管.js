//1:导入express模块
const express = require("express")
//  const http=require("http")

//2:调用express服务器对象
const app = express()
//  const server=http.createServer()

//3:快速托管静态界面app.use(虚拟静态文件目录,express.static(静态文件目录))

//express.static("./view")会将指定的view目录下的所有静态界面托管

//这个部分就是客户端向服务器发送请求，url就是发送请求的网址
//虚拟静态目录可以不写
//虚拟静态目录不写时,url指向的就是express.static()托管目录下的文件的地址
//写虚拟静态目录时，url=虚拟静态目录+express.static()托管目录下的文件的地址

//客户端向服务器发送情求的url永远参照服务器地址127.0.0.1:3000
//所以在html页面发送的css请求必须加上/css目录路径，这样html才能根据url找到css文件

//html的托管可以不写虚拟静态目录，因为html是单独存在的,而css是依附于html的，必须加前缀
app.use("/view", express.static("./view"))
app.use("/css", express.static("./css"))

//4:监听请求启动服务器
app.listen(3000, "127.0.0.1", () => {
    console.log("server running at http://127.0.0.1:3000");

})