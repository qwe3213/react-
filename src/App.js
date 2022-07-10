import {useEffect, useState} from "react";


function App(){
const [todo,setToDo]=useState("");
const [todos,setToDos]=useState([])
const onChange =(event) =>setToDo(event.target.value);
const onSubmit =(event) =>{
  event.preventDefault();
  if(todo===""){
    return;
  }else{
    setToDos((currentArray)=>[todo,...currentArray]);
    setToDo("")

  }
}

return(
  <div>
    <h1>My to Dos({todos.length})</h1>
    <form onSubmit={onSubmit}>
    <input 
    onChange={onChange}
    value={todo}
    type="text"
     placeholder="Write your to do"
     ></input>
     <button>to do click</button>
  </form>
  </div>
)
}
export default App;
