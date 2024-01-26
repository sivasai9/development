function promised(duration){
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
    return p;
}
const ans=promised(1000);
ans.then(function(){
    console.log("timeout is done")
});