//这里是文章页面路由模块
const express = require("express")

const routerArticle = express.Router()

const ctrl = require("../controller/article.js")

routerArticle.get("/addArticle", ctrl.addArticle)

module.exports = routerArticle