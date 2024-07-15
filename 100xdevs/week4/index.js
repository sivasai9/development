
let timeout;
function debounce(){
    clearTimeout(timeout);
    setTimeout(function(){
        populatediv();
    },1000);
}
function populatediv(){
    const a=document.getElementById("firstnumber").value;
    const b=document.getElementById("secondnumber").value;
    // const ele=document.getElementById("finalsum");
    // console.log(ele);
    // ele.innerHTML=parseInt(a)+parseInt(b);
    fetch("http://localhost:3000/sum?a="+ a +"&b="+b)
    .then(function(response){
        response.json()
        .then(function(ans){
            document.getElementById("finalsum").innerHTML=ans;
        })
    })
}