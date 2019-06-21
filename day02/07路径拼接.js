//导入path路径操作模块
const path = require("path")
const fs = require("fs")

//path.join("c:/","a","b")拼接文件路径
//多个参数用 , 隔开

fs.readFile(path.join(__dirname, "./file2.txt"), "utf-8", (err, data) => {

    if (err) return console.log("读取出错" + err.message);
    console.log("读取成功\n" + data);

})