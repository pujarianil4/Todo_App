import React, { useState } from "react"
import { TodoList } from "./todolist"
import style from "./todomap.module.css"

export function List({data,handletoggle ,handledelete}){
    const [show,setshow]= useState(false)
    const handleshow=()=>{
        setshow(!show)
    }
    return (
    <div>
     <div>
         <h1>Incomplete Tasks</h1>
     {
           data.map(item=> !item.status && <TodoList key={item.id} {...item} handletoggle={handletoggle} handledelete={handledelete}/>)
       }
     </div>
       <button className={style.show} onClick={handleshow}> {show? "Hide":"Show"} Completed task</button>
       <div>
           { 
           show && data.map(item=> item.status && <TodoList key={item.id} {...item} handletoggle={handletoggle} handledelete={handledelete} />)
           }
       </div>
    </div>
    )
}