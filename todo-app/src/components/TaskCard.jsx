import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import './TaskCard.css'

const TaskCard = ({title, handleDelete, index}) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>
        <div className='delete-icon'
             onClick={()=>handleDelete(index)}>
            <MdDeleteForever/></div> 
    </article>
  )
}

export default TaskCard;






 {/* <div className='task_card_bottom_line'> */}
            {/* <div className='task_card_tags'>
                <Tag tagName='HTML'/>
                <Tag tagName='CSS'/>
            </div> */}
        {/* </div> */}