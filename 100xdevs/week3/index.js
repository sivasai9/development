const express=require("express");
const app=express();

app.get("/health-checkup",function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const id=req.query.id;
    if(username=="siva" && password=="pass"){
        if(id==1|| id==2){
            res.json({
                msg:"your kidney is finne!"
            })
        }   
    }
    res.status(400).json({"msg": "somethings up with inputs"})
});
app.listen(3000);
