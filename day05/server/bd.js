//这里链接数据库    先创建数据库，再链接数据库
//导入数据库
const mysql = require("mysql")
//链接数据库
const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "root",
    database: "heros" //数据库名
})

//暴露数据库接口
module.exports = conn