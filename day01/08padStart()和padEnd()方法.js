//str.padStart("字符串补全后的长度"，"需要补全的字符串")   在str字符串的前面进行补全
var date = new Date()
var month = date.getMonth() + 1
console.log(month); //6

var newmonth = month.toString().padStart(2, "0")
console.log(newmonth); //06

//str.padEnd("字符串补全后的长度"，"需要补全的字符串")  在str字符串的后面进行补全
var str = "爱的魔力"
var newstr = str.padEnd(7, "转圈圈")
console.log(newstr); //爱的魔力转圈圈