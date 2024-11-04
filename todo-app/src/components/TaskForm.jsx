import React, {useState} from 'react';
import './TaskForm.css';


const TaskForm = ({setTasks}) => {
  
  {/*created a common object for all input datas */}
  const [taskData, setTaskData] = useState({           
    task:"",
    status: "todo"
  }) 

  {/*created a common function */}
  const handleChange = e =>{
    const {name, value} = e.target;

    setTaskData((prev)=>{
      return{...prev, [name]:value}
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setTasks(prev => {
      return [...prev, taskData]
    });
    setTaskData({           
      task:"",
      status: "todo"
    });
  }
    

  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type='text' 
                   className='task_input' 
                   placeholder='Enter your Task' 
                   name="task"
                   value={taskData.task} 
                   onChange={handleChange}/>

            <div className='task_form_bottom_line'>
                {/*dropdown*/}
                <select className='task_status' 
                        name='status' 
                        value={taskData.status}
                        onChange={handleChange}>
                    <option value="todo">To do</option>
                    <option value="onProgress">On progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button type='submit' className='task_submit'>+Add Task</button>
            </div>
        </form>
    </header>
  )
}

export default TaskForm;







 // const[task, setTask] = useState("");
  // const[status, setStatus] = useState("todo");

  // const handleTaskChange = e =>{
  //   setTask(e.target.value)
  // };
  // const handleStatusChange = e =>{
  //   setStatus(e.target.value)
  // };

  // const handleTag = (tag)=>{
  //    if(taskData.tags.some((item)=>item === tag)){
  //     const filteredTags = taskData.tags.filter((item)=>item !== tag)
  //     setTaskData((prev)=>{
  //       return {...prev, tags:filteredTags}
  //     })
  //    }else{
  //     setTaskData((prev)=>{
  //       return{...prev, tags:[...prev.tags,tag]}
  //     });setSelectedTag((prev)=>{return {...prev,tag}});
  //     console.log("selected: ",selectedTag);
  //    }
  //     }

  //   {/*function returns true/false depending on the selected tag contained inside taskData.tags */}
  //   const checkTag = (tag) =>{
  //     return taskData.tags.some(item=>{item === tag})
  //   } 




              {/* <Tag tagName="HTML" handleTag={handleTag} selectedTag={selectedTag}/>
                <Tag tagName="CSS" handleTag={handleTag} selectedTag={selectedTag}/>
                <Tag tagName="JS" handleTag={handleTag} selectedTag={selectedTag}/>
                <Tag tagName="REACT" handleTag={handleTag} selectedTag={selectedTag}/> */}
