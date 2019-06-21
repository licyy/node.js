//文件读取
//__dirname     当前文件所在目录的绝对路径

const fs = require("fs")

fs.readFile(__dirname + "/file2.txt", "utf-8", (err, data) => {

    if (err) return console.log(err.message);

    console.log(data);

})

//__filename        当前文件所在目录+当前文件名(当前文件)的绝对路径