//导入express模块
const express=require("express")
//创建app服务器对象
const app = express()
const fs = require("fs")
const path = require("path")
//导入session中间件
const session = require("express-session")
//挂载session中间件,初始化session设置
//这个时候已经有req.session了,在登陆之后添加session的值
app.use(session({
    secret: "这是密匙",
    resave: false,
    saveUninitialized: false,
}))

//导入monent.js模块
const moment = require("moment")

//导入获取数据中间件
const bodyParser = require("body-parser")
//挂载中间件
app.use(bodyParser.urlencoded({
    extended: false
}))



//设置ejs模板
app.set("view engine", "ejs")
app.set("views", "./views")

//托管静态资源
app.use("/node_modules", express.static("./node_modules"))

//挂载路由

//通过循环router文件夹,挂载使用路由
//获取router文件夹下的所有文件
fs.readdir(path.join(__dirname, "./router"), (err, data) => {
    //data是一个数组
    data.forEach(item => {
        const router = require(`./router/${item}`)
        // console.log(`./router/${item}`);
        app.use(router)

    })

})

// const routerIndex = require("./router/index.js")
// app.use(routerIndex)


//开启服务器
app.listen(80, () => {
    console.log("server running at http://127.0.0.1");
})