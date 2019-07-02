//导入express模块
const express = require("express")

//创建路由对象
const routerIndex = express.Router()

//导入index事件处理函数模块
const ctrl = require("../controller/index.js")


//将首页跳转路由挂载到routerIndex对象上
//事件处理函数在controller》index.js中
routerIndex.get("/", ctrl.showIndex)

//这里是获取文章列表的路由
routerIndex.get("/list",ctrl.getList)

//暴露routerIndex对象
module.exports = routerIndex