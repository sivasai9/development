import React, { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=3;

function App() {
  const [todos,setTodos]=useState([{
    id:1,
    title:"id1",
    description:"go to gym"
  },{
    id:2,
    title:"id2",
    description:"go to school"
  },{
    id:3,
    title:"id3",
    description:"go to collage"
  }
])
function addTodo(){
//   setTodos([...todos,{
//     id: 4,
//     title: Math.random(),
//     description: Math.random()
// }])
const newTodos=[];
for( let i=0;i<todos.length;i++){
  newTodos.push(todos[i]);
}
newTodos.push({
  id: counter++,
  title: Math.random(),
  description: Math.random()
})
setTodos(newTodos);
  
}
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
      {/* {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })} */}
      <CardWrapper>
        <div>hello there</div>
      </CardWrapper>
      <CardWrapper>
        <div>hi there</div>
      </CardWrapper>
       

    </div>
  )
}
function Todo({title,description}){
    return <div>
      <h1>
        {title}
      </h1>
      <h2>
        {description}
      </h2>
    </div>
  }

function CardWrapper({children}){
  return <div style={{border: "2px solid black",padding:20}}>
    {children}
  </div>
}

// function TextComponent(){
//   return <div>
//     hi i am sivasai
//   </div>
// }






export default App
