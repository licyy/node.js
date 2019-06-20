function show1() {
    console.log("is showTime1");
}

//改变成箭头函数
//1:箭头函数是一个匿名函数
let show2 = function () {
    console.log("is showTime2");
}
//2:省去function 在()和{}之间加上=>
let show3 = () => {
    console.log("is showTime3");
}

show1()
show2()
show3()


//-------------------------------------------------------------
let add = (x, y) => {
    return x + y
}
 console.log(add(1,2));

//变体1:当箭头左边只有一个形参时，()可以省略
let add = x => {
    return x + 10
}
console.log(add(1));
//变体2:当箭头右边只有一条执行代码时，{}可以省略，有return会默认会省略return
let add = (x, y) => x + y
console.log(add(1,2));
//变体3：当箭头左边只有一个形参并且右边只有一句执行代码时，()和{}都可以省略
let add = x => x + 10
console.log(add(1));