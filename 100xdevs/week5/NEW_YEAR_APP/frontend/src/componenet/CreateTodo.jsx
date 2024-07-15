import { useState } from "react";


 export function CreateTodo(){
    // react-query

    const [title,setTilte]=useState("");
    const [description,setDescription]=useState("");

    return <div>
        <input style={{padding:10,margin:10}} id ="t" type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTilte(e.target.value);
        }}></input> <br/>
        <input style={{padding:10,margin:10}} id="des" type="text" placeholder="desription" onChange={function(e){
            const value=e.target.value;
            setDescription(e.target.value);
        }}></input> <br/>
        <button style={{padding:10,margin:10}} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "content-type": "application/json"
                }
            })
            .then(async function(res){
                const json=await res.json();
                alert("Todo added");
            })
        }}>Add a todo</button>
    </div>

}