const houre1=document.getElementById("hour");
const minuteel=document.getElementById("minutes");
const secondsel=document.getElementById("seconds");
const ampm=document.getElementById("ampm");

function updateclock(){
    let h= new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="PM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }

    houre1.innerText=h;
    minuteel.innerText=m;
    secondsel.innerText=s;
    ampm,(innerText=ampm);
    setTimeout(()=>{
        updateclock()

    },1000)
}
updateclock();
