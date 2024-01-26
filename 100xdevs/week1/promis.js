
let p=new Promise(function(resolve){
    resolve("foo");
});
function callback(){
    console.log(p);
}
p.then(callback);
