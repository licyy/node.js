//这里是数据处理函数模块

//导入链接数据库模块
const conn = require("./bd.js")

const controller = {
    //测试函数
    test: (req, res) => {
        console.log("服务器启动成功"); //打印在终端
        res.send("服务器启动成功") //渲染在客户端
    },
    //获取所有英雄数据
    getAllHero: (req, res) => {
        //运行到这里并表示服务器链接正常，下面编写sql语句，获取数据库数据

        console.log(req.query);
        let data = req.query
        const sql1 = "select count(*) as count from heros"
        conn.query(sql1, (err, result) => {
            if (err) return res.send({
                status: 500,
                msg: "err",
                data: null
            })
            let dataLength = result[0].count //所有英雄长度
            console.log(dataLength);

            //编写sql语句
            const sql2 = `select * from heros limit ${(data.page-1)*data.pagesize},${data.pagesize}`
            //从数据获取数据
            conn.query(sql2, (err, result) => {
                if (err) return res.send({
                    status: 500,
                    msg: "err",
                    data: null
                })

                    res.send({
                        status: 200,
                        msg: "ok",
                        data: result,
                        dataLength:dataLength
                    })

            })


        })



    },
    //添加新英雄
    addHero: (req, res) => {
        //获取从客户端传递过来的数据
        let newHero = req.body

        //添加创建时间
        let dt = new Date()
        let year = dt.getFullYear()
        let month = (dt.getMonth() + 1).toString().padStart(2, "0")
        let day = dt.getDate().toString().padStart(2, "0")
        let hh = dt.getHours().toString().padStart(2, "0")
        let mm = dt.getMinutes().toString().padStart(2, "0")
        let ss = dt.getSeconds().toString().padStart(2, "0")
        //ES6字符串拼接
        newHero.ctime = `${year}-${month}-${day} ${hh}:${mm}:${ss}`

        //验证英雄名是否重复
        const sql1 = "select count(*) as count from heros where name=?"
        conn.query(sql1, newHero.name, (err, result) => {
            if (err) return res.send({
                "status": 402,
                "msg": "链接错误",
                "data": null
            })
            if (result[0].count != 0) return res.send({
                "status": 402,
                "msg": "英雄名字重复",
                "data": result
            })
            //编写sql语句
            const sql2 = "insert into heros set ?"
            //向数据库发送请求
            conn.query(sql2, newHero, (err, result) => {
                if (err) return res.send({
                    "status": 402,
                    "msg": "err",
                    "data": null
                });
                res.send({
                    "status": 200,
                    "msg": "ok",
                    "data": result
                })
            })
            console.log("ok");

        })



    },
    //根据ID获取英雄数据
    getHeroById: (req, res) => {
        const id = req.params.id
        const sql = "select * from heros where id=?"
        conn.query(sql, id, (err, result) => {
            if (err) return res.send({
                "status": 402,
                "msg": "err",
                "data": null
            });
            res.send({
                "status": 200,
                "msg": "ok",
                "data": result
            })
        })
    },
    //根据ID修改英雄数据
    updateHeroById: (req, res) => {
        const id = req.params.id
        const data = req.body

        const sql1 = "select count(*) as count from heros where name=?"
        conn.query(sql1, data.name, (err, result) => {
            if (err) return res.send({
                "status": 402,
                "msg": "链接错误",
                "data": null
            })
            if (result[0].count != 0) return res.send({
                "status": 402,
                "msg": "英雄名字重复",
                "data": result
            })
            const sql2 = "update heros set ? where id=?"
            conn.query(sql2, [data, id], (err, result) => {
                if (err) return res.send({
                    "status": 402,
                    "msg": "err",
                    "data": null
                });
                res.send({
                    "status": 200,
                    "msg": "ok",
                    "data": result
                })
            })


        })

    },
    //根据ID删除英雄
    delHeroById: (req, res) => {
        const id = req.params.id
        const sql = "update heros set isdel=1 where id=?"
        conn.query(sql, id, (err, result) => {
            if (err) return res.send({
                "status": 402,
                "msg": "err",
                "data": null
            });
            res.send({
                "status": 200,
                "msg": "ok",
                "data": result
            })
        })
    },
    //根据ID启用英雄
    upHeroById: (req, res) => {
        const id = req.params.id
        const sql = "update heros set isdel=0 where id=?"
        conn.query(sql, id, (err, result) => {
            if (err) return res.send({
                "status": 402,
                "msg": "err",
                "data": null
            });
            res.send({
                "status": 200,
                "msg": "ok",
                "data": result
            })
        })
    }
}

//暴露数据处理函数模块接口
module.exports = controller