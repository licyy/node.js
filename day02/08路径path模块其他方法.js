//导入path路径模块
const path = require("path")
//导入fs文件模块
const fs = require("fs")


//定义当前路径为文件路径
var currentPath = path.join(__filename)
console.log(currentPath);
//获取路径最后的文件名称
var fileName = path.basename(currentPath)
console.log(fileName);
//获取路径文件所在文件夹的地址
var dirName = path.dirname(currentPath)
console.log(dirName);
//获取路径文件后缀名
var extName = path.extname(currentPath)
console.log(extName);

console.log(module);
