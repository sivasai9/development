import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'      
import { CreateTodo } from './componenet/CreateTodo'
import { Todos } from './componenet/Todos'

function App() {
  const [todos,setTodos]=useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json=await res.json();
    console.log(json.todo);
    setTodos(json.todo);
  });
  
  return (
    <div>
      {<CreateTodo></CreateTodo> }
      <Todos todo={todos}> </Todos>
    </div>
  )
}

export default App
