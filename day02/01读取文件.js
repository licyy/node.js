//node的三个组成部分 ECMAScript 全局成员 核心API成员
//要访问核心API成员，直接使用require("核心成员的名称")就能够导入并使用核心API

//fs文件操作核心模块,导入fs核心模块
const fs = require("fs")
//fs核心模块中文件读取方法 fs.readFile
//php读取文件：get_file_content

//fs.readFile("读取文件路径","编码格式",读取之后的回调函数)
//参数1：读取文件路径
//参数2：可选；要以什么样的编码格式，来读取指定的文件 默认 编码格式为 null
//参数3：表示 当文件读取完成，调用这个 callback 回调函数来处理读取的结果：
//           第一个 参数，是 Error 对象，第二个参数，才是读取成功的结果

//err==null表示读取成功
fs.readFile("./file.txt", "utf-8", (err, data) => {
    if (err) return console.log("文件读取失败" + err.message);

    console.log("文件读取成功" + data);
})