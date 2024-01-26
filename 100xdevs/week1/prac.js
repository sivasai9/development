const fs=require('fs');
// function findsum(n){
//     let ans=0;
//     for(let i=0;i<n;i++){
//         ans+=i;
//     }
//     return ans;
// }
// function findsum100(){
//     console.log(findsum(5));
// }

// setTimeout(findsum100,1000);
// console.log("hello wolrd");
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});
