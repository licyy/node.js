//导入模块
const express = require("express")
//创建服务器对象
const app = express()

//对静态页面进行托管
app.use(express.static("./views"))
//对依附的css,js文件进行托管
//静态页面托管地址是相对于根目录的,html调用css,js是相对于html文件的,所以要加上虚拟路径
app.use("/Semantic", express.static("./Semantic"))
app.use("/node_modules", express.static("./node_modules"))




//启动服务器
app.listen(3000, "127.0.0.1", () => {
    console.log("server running at http://127.0.0.1:3000");

})