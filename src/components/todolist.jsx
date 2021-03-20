import React from "react"
import style from "./todolist.module.css"

export function TodoList({ todo, status, id,handletoggle,handledelete }) {
   
    
    return (
        <div className={style.todo}>
     {
       status? <input name="packersOff" className={style.strikethrough}  type="checkbox" onChange={()=>handletoggle(id)} data-bind="checked: params.availToStream" checked/> 
       : <input name="packersOff" className={style.strikethrough}  type="checkbox" onChange={()=>handletoggle(id)}/>
     }  
          <label for="packersOff">{todo}</label>
          <i className="fa fa-trash-o" onClick={()=>handledelete(id) }></i>
        </div>
    )
}  