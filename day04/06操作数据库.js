//1导入express模块
const express = require("express")
//2:创建服务器模块
const app = express()
//3:下载mysql包  npm -i mysql -S
//4:导入mysql包
const mysql = require("mysql")
//5:链接数据库
const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "root",
    database: "node" //数据库名
})
// 6:编写sql语句实现增删改查
// 查:
let sql1 = "select * from user"; //表名
connection.query(sql1, (err, result) => {
    if (err) throw err
    console.log(result);

})
//增
let sql2 = "insert into user set ? "
let obj = {
    usename: "tom",
    gander: "男",
    age: "24"
}
connection.query(sql2, obj, (err, result) => {
    if (err) throw err;
    console.log(result);

})
//改
let sql3 = "update user set ? where id= ? "
let obj2={
    id:2,
    usename:"jerry",
    gander:"女"
}
connection.query(sql3,[obj2,obj2.id],(err,result)=>{
    if(err) throw err
    console.log(result);
})
//删除
let sql4="delete from user where id=?"
connection.query(sql4,3,(err,result)=>{
    if(err) throw err
    console.log(result);
})