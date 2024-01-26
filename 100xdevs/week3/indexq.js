const express=require("express");
const zod=require("zod");
const app=express();
const schema=zod.array(zod.number());

const schema1=zod.object({
    email:zod.string(),
    password:zod.string(),
    coutry:zod.literal("IN").or(zod.literal("US")),
    kidneys:zod.arrray(zod.number())
});


app.use(express.json());
app.post("/health-checkup",function(req,res){
    const kidney=req.body.kidney;
    // const kidneylenght=kidney.length;
    const response= schema.safeParse(kidney)
    if(!response.success){
        res.status(404).json({
            msg:"input is invalid"
        })
    }

    // res.send({
    //     response
    // })
    // res.send("you have "+kidneylenght+" kidneys");
    
});

// glbol catches 
// app.use(function(err,req,res,next){
//     res.json({
//         msg:"sorry something is up with our server"
//     })
// });

app.listen(3000);