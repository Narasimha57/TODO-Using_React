import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[task, setTask] = useState("")
  const[todos, setTodos] = useState([])

  const handleChange=(e)=>{
    setTask(e.target.value)

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(task);
    const newTodos = [...todos,task]
    setTodos(newTodos)
    setTask(" ")
  }
 
const deleteHandler=(event)=>{
  const newTodos = todos.filter((i, index) => index !== event)
    setTodos(newTodos)
}

  return (
    <center>
      <div className='card mt-5 w-50'>
        <div className='card-body '>
          <h3 className='card-title'>TODO Using React</h3>
          <form onSubmit={handleSubmit}>
            <input type="text"  value={task} onChange={handleChange}/>&nbsp;
            <input type="submit" value="Add Todo" id="" />
          

          </form> &nbsp;
          <div>
            {todos.map((i,index)=>{
              return(
                <div key={index}>
                <h6>{i} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h6>
            </div>
            )
            
        })}
    </div>
        </div>
        

      </div>
    </center>
  )
}

export default App
