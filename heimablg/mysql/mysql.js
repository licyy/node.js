//这里是链接数据库的模块
//导入数据库模块
const mysql = require("mysql")
//链接数据库
const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "root",
    database: "node" //数据库名
})

//暴露数据库模块
module.exports = conn