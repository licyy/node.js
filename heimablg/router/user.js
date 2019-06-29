//导入express模块
const express = require("express")

//创建路由对象
const routerUser = express.Router()

//导入用户模块的事件处理函数模块
const ctrl = require("../controller/user.js")

////将用户逻辑路由挂载到routerUser对象上
//跳转登陆
routerUser.get("/login", ctrl.showLogin)
//跳转注册
routerUser.get("/register",ctrl.showRegister )

//post提交注册信息
routerUser.post("/register",ctrl.regist )

//post提交登信息
routerUser.post("/login", ctrl.login)

//get退出登陆,消除session记录
routerUser.get("/loginout", ctrl.loginout)

//routerUser
module.exports = routerUser