const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb+srv://siva:Krishna%402020@cluster0.merxsgy.mongodb.net/login_tut")

connect.then(()=>{
    console.log("database is conneeted");
})
.catch(()=>{
    console.log("database is not connected");
})

const loginschema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true

    }
});


const collection=new mongoose.model("user",loginschema);

module.exports=collection;