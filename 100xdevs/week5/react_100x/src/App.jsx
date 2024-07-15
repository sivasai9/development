import {useState} from "react";

function App() {
  const[count,setCount]=useState(0);
  
  return (                                                  
    <div>
      <CustomerButton count={count} setCount={setCount}></CustomerButton>
    </div>
  )
}
function CustomerButton(props){

  function onclickhandler(){
    props.setCount(props.count+1);
  }
  
  return <button onClick={onclickhandler}>
    Counter {props.count}
  </button>
}

export default App
