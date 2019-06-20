//const定义常量，没有变量提升
// console.log(a); //报错
// const a = 1

// //const定义常量,无法被重新赋值
// const b = 2
// b = 3
// console.log(b); //报错

// //const定义常量必须在声明的时候就赋值
// const b
// console.log(b); //报错

//const定义常量也有块级作用域
for (let i = 0; i < 10; i++) {
    const c = "hello"
    console.log(c); //打印10次hello
}


const d = "awsl"
const d = "awsl"    //报错：常量d已经被定义