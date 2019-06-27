//导入express模块
const express = require("express")
//创建router路由对象
const router = express.Router()

//导入数据处理函数模块
const ctrl = require("./controller.js")

//挂载路由
//监听页面请求
router.get("/", ctrl.test)

//监听获取全部英雄请求
//通过发送getAllHero就可以启用该接口  get
router.get("/getAllHero", ctrl.getAllHero)

//添加英雄
//通过发送getAllHero就可以启用该接口 post
//通过body-parse插件来获取客户端传递过来的数据,数据在req.body
router.post("/addHero", ctrl.addHero)

//根据id获取英雄
//通过发送getHero/:id就可以启用该接口
router.get("/getHero/:id", ctrl.getHeroById)

//修改英雄数据
router.post("/updateHero/:id", ctrl.updateHeroById)

//软删除==将isdel=0修改成isdel=1
router.get("/delHero/:id", ctrl.delHeroById)


//暴露路由对象
module.exports = router