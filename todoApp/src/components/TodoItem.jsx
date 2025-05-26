import React from 'react'
import './TodoItems.css'

export const TodoItem = ({task , deleteTask , toggleCompleted}) => {
  
  const handleChange = () => {
    toggleCompleted(task.id);
  }

  return(
    <div className='todo-item'>
      <input 
        className='check-btn'
        type='checkbox'
        checked={task.complete}
        onChange={handleChange}
      />  
      <p>{task.text}</p>
      <button className='delete-btn' onClick={()=>deleteTask(task.id)}>X</button>
    </div>
  )

}
