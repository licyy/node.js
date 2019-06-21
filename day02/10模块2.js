//一个js文件就是一个模块
//在模块中通过require()导入另一个模块
//通过global定义全局变量

//导入模块1
const m1 = require("./09模块1")

//接收全局变量
console.log(global.a);

//m1导入的时候接收了暴露出来的数据
console.log(m1);