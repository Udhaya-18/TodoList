import React from 'react'
import './Task.css'
function Task({task,delTodo,delInd}) {

  return (
    <>
        <div className='task'>
            <div className='tasktext'>{task}</div>
            <input type="checkbox" />
            <button className='del' onClick={()=>delTodo(delInd)}><img src={'/src/assets/bin.png'} alt="" height="30px" width="30px"/></button>
        </div>
    </>
  )
}

export default Task