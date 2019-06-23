function multiply(...arg) {
    let result = arg[0]
    for (let i = 1; i < arg.length; i++) {
        result *= arg[i]
    }
    return result
}
module.exports = multiply

// let arr = [1, 2, 3, 4]
// console.log(multiply(...arr));