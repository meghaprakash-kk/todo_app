import React, {useEffect, useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';


const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks);

function App() {
  
  const [tasks, setTasks] = useState(JSON.parse(oldTasks)||[]);
  
  {/* localStorage */}
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  const handleDelete = (taskIndex) =>{
      const newTasks = tasks.filter((task,index)=>index !== taskIndex);
      setTasks(newTasks)
  }

  return (
    <div className='app'>
    <TaskForm setTasks={setTasks}/>
    <main className='app_main'>
      <TaskColumn columnName="Todo" status="todo" tasks={tasks} handleDelete={handleDelete}/>
      <TaskColumn columnName="On Progress" status="onProgress" tasks={tasks} handleDelete={handleDelete}/>
      <TaskColumn columnName="Completed" status="completed" tasks={tasks} handleDelete={handleDelete}/>
    </main>
    </div>
  )
}

export default App
