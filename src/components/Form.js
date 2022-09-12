import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';


function Form({inputText,setInputText,todos,setTodos,setStatus}) {
  

    const inputTextHandler= (e)=>{
            setInputText(e.target.value);
    }

    const submitHandler = (e)=>{
          e.preventDefault();

          setTodos([...todos,{text:inputText, completed:false, id:uuidv4()}]);

          setInputText('')
    }


    const statusHandler = (e)=>{
        setStatus(e.target.value)
    }


  return (
    <form>
            <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' />
            <button onClick={submitHandler} className='todo-btn' type='submit'>
               <AiOutlinePlus/>
            </button>

            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>unCompleted</option>
                </select>
            </div>
        </form>
  )
}

export default Form