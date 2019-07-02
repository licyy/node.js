//这里是文章页面路由模块
const express = require("express")

const routerArticle = express.Router()

const ctrl = require("../controller/article.js")

//展示添加文章页面
routerArticle.get("/article/add", ctrl.showArticle)

//post添加文章
routerArticle.post("/article/add1",ctrl.addArticle)

//显示文章详情界面 info
routerArticle.get("/article/info/:id",ctrl.infoArticle)

//显示文章编辑界面 get
routerArticle.get("/article/edit/:id",ctrl.showEditArticle)

//根据文章id编辑界面
routerArticle.post("/article/edit/:id",ctrl.editArticle)


module.exports = routerArticle