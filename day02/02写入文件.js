//导入fs核心模块
const fs = require("fs")
//fs.writeFlie("写入文件路径","写入内容", "编码格式","回调函数")方法
//参数1：写入文件的路径，如果有就覆盖，没有就创建新的
//参数2：写入的内容
//参数3：可选，编码格式，默认utf-8
//参数4：执行完成后的回调函数，err==null表示成功
fs.writeFile("./file2.txt", "我永远喜欢长泽雅美", err => {
    if (err) return console.log("写入文件失败" + err.message);
    //if (err) throw err //出现错误，抛出错误提示
    console.log("写入文件成功");

})