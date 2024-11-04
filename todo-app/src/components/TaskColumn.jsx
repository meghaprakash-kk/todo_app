import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'
import './TaskColumn.css'

const TaskColumn = ({columnName, status, tasks, handleDelete}) => {
  return (
      <section className='task_column'>
        <h2>
        {columnName}
        </h2>
        {tasks.map((task,index)=>{
          return task.status === status && <TaskCard key={index} title={task.task} handleDelete={handleDelete} index={index}/> 
        })}
        
      </section>
  )
}

export default TaskColumn
