//let定义的变量没有变量提升，var会提升

// console.log(a);     //underfinde
// var a = 1;

console.log(b); //报错
let b = 2;


//let会在函数{}内形成独立作用域，外部接收不到
//只要有{}就会有作用域
// for (var i = 0; i < 10; i++) {

// }
// console.log(i);     //i=10

for (let j = 0; j < 10; j++) {

}
console.log(j); //报错