const express=require("express");
const collection=require("./config");

const app=express();
app.use(express.json());

app.set('view engine' ,'ejs');

app.get("/",(req,res)=>{
    res.render("login")
});

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup", async(req,res)=>{
    const data={
        name:req.body.username,
        password: req.body.password
    }
    const userdata=await collection.create(data);
    console.log(userdata);
})


const port=5000
app.listen(port,()=>{
    console.log(`server is runnig on pert:${port}`)
});