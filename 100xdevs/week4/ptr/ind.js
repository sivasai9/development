function cal_interest(){
    const p=document.getElementById("p").value;
    const t=document.getElementById("t").value;
    const r=document.getElementById("r").value;
    // const ele=document.getElementById("ptr");

    // ele.innerHTML="interest is " +(parseInt(p)+parseInt(t)+parseInt(r))/100;
    fetch("http://localhost:5000/interest?p="+p+"&r="+r+"&t="+t)
    .then(function(response){
        response.text()
        .then(function(ans){
            document.getElementById("ptr").innerHTML=ans;
        })
    })
}
    