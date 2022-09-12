import React from 'react'
import {AiOutlineDelete,AiOutlineCheck} from 'react-icons/ai'



function Todo({text,todo,todos,setTodos}) {

    const deleteHandler = ()=>{
           setTodos(todos.filter(el=> el.id !== todo.id))
    }

    const completedHandler = ()=>{
        setTodos(todos.map(item=>{
             if(item.id === todo.id){
                return { ...item, completed : !item.completed  }
             }
             return item;
        }))
    }

  return (
    <div className='todo'>
       <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>

       <button onClick={completedHandler} className='complete-btn'>
          <AiOutlineCheck/>
       </button>
       <button onClick={deleteHandler} className='trash-btn'>
           <AiOutlineDelete/>
       </button>
    </div>
  )
}

export default Todo