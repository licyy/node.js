//一个js文件就是一个模块
//在模块中通过require()导入另一个模块  在模块2中引入模块1

//通过global定义全局变量
var a = 100
global.a = a

//通过exports暴露
var b = 200
exports.b = b