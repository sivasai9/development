const input=[1,2,3,4,5];
// for(let i=0;i<input.length;i++){
//     input[i]=input[i]*2;
    
// }
// console.log(input);

function transform(i){
    return i*2;
}
const ans=input.map(transform);
console.log(ans);

