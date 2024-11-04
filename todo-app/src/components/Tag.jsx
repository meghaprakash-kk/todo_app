import React from 'react'
import './Tag.css'

const Tag = ({tagName, handleTag, selectedTag}) => {
 
  return (
    <div>
       <button 
              type="button" 
              className='tag' 
              onClick={()=>handleTag(tagName)} 
              style={{backgroundColor: selectedTag === tagName ? 'lightblue' : 'lightgray'}}>
                {tagName}
        </button>
    </div>
  )
}
{/* arrow function is used. otherwise the function will only called once */}

export default Tag
