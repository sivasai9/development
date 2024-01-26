// const str="siva sai krishna ";
// console.log(str.split(" "));
// const st="   siva";
// console.log(st.trim());
// string methods
// toUpperCase
// toLowerCase
// slice
// indexOf
// substring
// replace
// to repeate the logic 
// call backs

function square(n){
    return n*n;
}   
function sumofsquare(a,b,fn){
    const a1=fn(a);
    const b1=fn(b);
    return a1+b1;
}
const a=sumofsquare(2,3,square);
console.log(a);