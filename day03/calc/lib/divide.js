function divide(...arg) {
    let result = arg[0]
    for (let i = 1; i < arg.length; i++) {
        result /= arg[i]
    }
    return result
}
module.exports = divide

// let arr = [2, 4]
// console.log(divide(...arr));