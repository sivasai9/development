const express=require("express");
const zod=require("zod");
const app=express();

function validateInput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
const response=schema.safeParse(obj);
return response;
}

app.use(express.json());

app.post("/login",function(req,res){
    const input=req.body;
    const response=validateInput(input);
    if(!response.success){
        res.json({
            msg:"your inputs are invalid"
        });
    }else{
        res.json({
            msg:"your inputs are valid"
        });
    }
});

app.listen(3000);
