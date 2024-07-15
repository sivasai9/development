const express=require("express");
const path=require("path");
const hbs=require("hbs");
const collection=require("./mongoesdb");
const app=express();

const templatePath=path.join(__dirname,'../templates')
const collections = require("./mongoesdb");


app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("login");
})

app.post("/signup", async (req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password
    }
    await collections.insetMany([data]);
    res.render("home");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})
const port=3000;
app.listen(port,()=>{
    console.log("server is running");
})

