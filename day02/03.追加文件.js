//导入fs模块 files
const fs = require("fs")
//fs.appendFile("追加文件路径","追加文本内容","编码格式","回调函数")
//参数1：需要追加文本的文件路径  如果有则追加，没有先创建在追加
//参数2：追加文本
//参数3：可选，编码格式，默认utf-8
//参数4：回调函数，err==null表示追击成功
fs.appendFile("./file2.txt", "\n桥本环奈", (err) => {

    if (err) return console.log("追加出错" + err.message);

    console.log("追加成功");

})