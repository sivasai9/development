const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://siva:Krishna%402020@cluster0.merxsgy.mongodb.net/user_app")

const user=mongoose.model('users',{name: String,email:String,password:String});

const ser=new user({
    name:'singh',
    email:'siva@gmail.com',
    password:'12345'});

ser.save();
