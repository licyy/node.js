//解构赋值:将对象中的属性解放出来，使其可以被直接使用
//let|const { } = obj

//定义一个对象
let user = {
    name: "zs",
    age: "18",
    gender: "men"
}

//将对象里面的属性解放出来当作变量直接使用
let {
    name,
    age
} = user
//被解放出来的属性可以当作变量来使用，而不用通过调用
console.log(name);
console.log(age);

//被解放的同时，可以通过:对属性进行重新定义变量名
const {
    gender: userGender
} = user
console.log(userGender);