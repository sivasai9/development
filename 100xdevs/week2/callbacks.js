function square(a){
    return a*a;
}
function cube(n){
    return n*n*n;
}

function sumofsquare(a,b,fn){
    let x=fn(a);
    let y=fn(b);
    return x+y;
}
let ans=sumofsquare(1,2,square);
console.log(ans);
