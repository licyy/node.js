const express=require("express")
const app=express()

app.set("view engine","ejs")
app.set("views","./view")


let user={
    name:"zs",
    age:18,
    hobby:["吃饭","睡觉","打豆豆"]
}
app.get("/",(req,res)=>{
    res.render("index.ejs",user)
})

app.listen(3000,"127.0.0.1",()=>{
    console.log("server running at http://127.0.0.1:3000");

})