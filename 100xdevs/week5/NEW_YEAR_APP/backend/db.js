const mongoose=require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://siva:Krishna%402020@cluster0.merxsgy.mongodb.net/todo_app");
const toschema=mongoose.Schema({
    title: String,
    description: String,
});

const todos=mongoose.model('todos',toschema);

module.exports={
    todos
}
