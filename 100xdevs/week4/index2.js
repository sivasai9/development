const express=require("express");
const cors = require("cors");
const app=express();

app.use(cors());

app.get("/sum",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const sum=a+b;
    console.log(sum);
    res.send(""+sum);
})
app.listen(3000);
