const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://siva:Krishna%402020@cluster0.merxsgy.mongodb.net/login_signup")
.then(()=>{
    console.log("connected successfully");
})
.catch("not yet connected");


const login_schema=mongoose.Schema({
    username:String,
    password:String
})

const collection=new mongoose.model("collection1",login_schema);

module.exports=collection;


