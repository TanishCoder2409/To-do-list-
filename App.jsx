import './App.css';
import { useState } from 'react';

function App() {
  const [inputvalue,setinputvalue]=useState("")
  const [todolist,settodolist]=useState([])
  const setvalue=(e)=>{
    setinputvalue(e.target.value)
}
const addtask=()=>{
  settodolist([...todolist,inputvalue])
  console.log(todolist)
  setinputvalue("")
}
const handledelete=(i)=>{
  const deletelist=todolist.filter((elem,id)=>{
    return i!==id  
  })
  settodolist(deletelist)
}
  return (
    <div className='OuterContainer'>
      <div className='MainContainer'>
        <h1 className='h1tag'>Todo List</h1>
        <input type="text" className='input' placeholder='Enter a Task' value={inputvalue} onChange={setvalue}></input>
        <button className='btn' onClick={addtask}>Add</button>
        <h2>Your list Contains: </h2>
        {todolist!=[] && todolist.map((printlist,i)=>{
          return(
            <>
            <p key={i} className='data'>{printlist} <button className='delete' onClick={()=>{handledelete(i)}}>Delete</button></p>
            
            </>
          )
        })}
      </div>
    </div>
  );
}
export default App;
