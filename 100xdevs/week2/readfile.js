const fs=require("fs");
fs.readFile("a.txt","UTF-8",function(err,data){
    // console.log(err);
    console.log(data);
});
console.log("hello");