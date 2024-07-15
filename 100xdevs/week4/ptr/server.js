const express=require("express");
const cors=require("cors");

const app=express();
app.use(cors());

app.get("/interest",function(req,res){
    const p=req.query.p;
    const t=req.query.t;
    const r=req.query.r;
    const interest=(p*t*r)/100;
    res.send(""+interest);
})
app.listen(5000);
