const express=require("express");
const { createTodo, updateTodo } = require("./type");
const { todos} = require("./db");
const cors=require("cors");

const app=express();
app.use(cors());


app.use(express.json());

// body{
//     title:String
//     description:string
// }

app.post("/todo", async function(req,res){
    const createpayload=req.body;
    const parsedpayload=createTodo.safeParse(createpayload);

    if(!parsedpayload.success){
        return res.status(411).json({
            msg: "inputs are wrong",
        })
        return;
    }
    await todos.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    })
    
    res.json({
        msg:"Todo created"
    })

})

app.get("/todos",async function(req,res){
    const todo=await todos.find({});
    res.json({
        todo : todo
    })
})

app.put("/completed",async function(req,res){
    const updatepaylaod=req.body;
    const parsedpayload=updateTodo.safeParse(updatepaylaod);
    if(!parsedpayload.success){
        return res.status(411).json({
            msg: "inputs are wrong",
        })
        return;
    }
    await todos.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})


app.listen(3000);