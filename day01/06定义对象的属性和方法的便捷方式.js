let name = "za";
let age = "18"

let user = {
    userName: name,
    //当对象的属性名和值的名一样是，可以只写一个
    age,
    //对象中的方法可以直接写
    saiHai() {
        console.log("hi")
    },
    //对象中的方法同样可以使用箭头函数
    sing: () => {
        console.log("唱歌");

    }


}