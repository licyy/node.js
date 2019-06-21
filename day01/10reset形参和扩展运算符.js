//当传入参数不确定数量时，可以使用...args来定义形参
//...arg是一个数组，argments是一个伪数组

function add(...args) {
    var sum = 0
    for (let i = 0; i < args.length; i = 0) {
        sum += arguments[i]
    }
    console.log(sum);

}

//...arg可以解构数组，表示里面的每一个参数

let arr = [1, 2, 3, 4, 5]
add(...arr)