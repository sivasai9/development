function addtodo(){
    const title=document.getElementById("title").value;
    const description=document.getElementById("description").value;
    const originalhtm=document.getElementById("container").innerHTML;
    const childdiv=document.createElement("div");
    outerdiv.innerHTML=title;
    document.getElementById("container").appendChild(childdiv);
    
    // originalhtm + `<div>
    // <div>${title}</div>
    // <div>${description}</div>
    // <button>mark as done</button>
    // </div>`
}