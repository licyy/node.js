//导入express模块
const express = require("express")
const app = express()

//导入第三方获取数据的中间件
const bodyParser = require("body-parser")
//挂载中间件
app.use(bodyParser.urlencoded({
    extended: false
}))

//引入cors跨域模块
const cors = require("cors")
//挂载跨域
app.use(cors())

//引入路由模块
const router = require("./router.js")
//挂载路由
app.use(router)






//启动服务器
app.listen(5001, "127.0.0.1", () => {
    console.log("server running at http://127.0.0.1:5001");

})