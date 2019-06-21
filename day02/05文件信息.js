//导入fs文件模块
const fs = require("fs")

//fs.stat("文件名或文件目录")获取文件信息

fs.stat(__dirname + "/file2.txt", (err, stats) => {
    if (err) return console.log("获取文件信息出错" + err.message);
    console.log(stats);
    //stats.size    文件大小
    //stats.birthtime   文件创建时间
    //stats.isFile()    判断是否是一个文件
    //stats.isDirectory() 判断是否是是一个目录
})