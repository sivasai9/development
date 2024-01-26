const arr=[1,2,3,4,5]
function filternn(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
const ans=arr.filter(filternn);
console.log(ans);
