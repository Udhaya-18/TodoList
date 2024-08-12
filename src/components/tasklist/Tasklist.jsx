import React from 'react'
import Task from '../task/Task'
import './Tasklist.css'
function Tasklist({tasks,delTodo}) {
  
  return (
    <>
    <div className='taskBox'>
        {
            tasks.map((t,i)=><Task task={t} delTodo={delTodo} delInd={i}/>)
        }
    </div>
    </>
  )
}

export default Tasklist