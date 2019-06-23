function add(...arg) {
    let result = 0
    for (let i = 0; i < arg.length; i++) {
        result += arg[i]
    }
    return result
}
module.exports = add
// let arr = [1, 2, 3, 4]
// console.log(add(...arr));