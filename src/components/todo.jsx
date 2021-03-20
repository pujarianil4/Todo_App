import React from "react"
import { useState } from "react"
import {v4 as uuid} from "uuid"
import { List } from "./todomap"
import { TodoList } from "./todolist"
import style from "./todo.module.css"


export function Todo(){
    
    const init={
        todo:""
    }
    const[query,setquery]=useState(init)
    const [data,setdata]=useState([])
    const handlechnge =(e)=>{
     let {name,value}= e.target
        const payload={
            ...query,
            status: false,
            id:uuid(),
            [name]: value
        }
        setquery(payload)
    }
    const handleadd=(e)=>{
        e.preventDefault()
       setdata([...data,query])
       setquery(init)
    }

    const handletoggle =(id)=>{
        const updadedtodo= data.map(item=> item.id===id ? {...item, status: !item.status}: item  )
        setdata(updadedtodo)
    }
    const handledelete =(id)=>{
        const updatedeleted= data.filter(item=> item.id != id)
        setdata(updatedeleted)
    }
  return(
    <div>
        <h1 className={style.title}>Todo App</h1>
        <h4>Designed & Develope by : Anil Pujari</h4>
        <div className={style.input}>
           <form onSubmit={handleadd}>
           <input type="text" value={query.todo} name="todo" onChange={handlechnge} required/>
            <button>ADD</button>
           </form>
        </div>
        <div>
            <List data={data} handletoggle={handletoggle} handledelete={handledelete}/>
        <div>
         
        </div>
        </div>
    </div>
  ) 
}