import React from 'react'
import Task from './Task'

function FilterTask({tasks}) {

    
    
    return (
        <div style={{marginTop: "30px"}}>
           {
             tasks
             .map((el) => <Task task={el} key={el.id} />)  
           } 
        </div>
    )
}

export default FilterTask
