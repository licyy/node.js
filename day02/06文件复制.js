//导入fs 文件操作模块
const fs = require("fs")

//fs.copyFile("源文件路径","复制文件路径",function(err){})
//参数1：源文件路径
//参数2：复制文件路径
//参数3：回调函数
fs.copyFile(__dirname + "/file2.txt", __dirname + "./file-copy.txt", (err) => {
    if (err) return console.log("copy出错" + err.message);
    console.log("copy成功");
})