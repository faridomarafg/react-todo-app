import React, { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'




function App() {
          const [inputText,setInputText] = useState('');
          const [todos,setTodos] = useState([]);

          //Adding filtering state
          const [status,setStatus] = useState('all');
          const [filteredTodos,setFilteredTodos] = useState([]);

          //adding function for filtering todos on secreen
          const filterHandler = ()=>{
              
            switch(status){
              case 'completed':
                setFilteredTodos(todos.filter(todo=> todo.completed === true));
                break;
              case 'uncompleted':
                setFilteredTodos(todos.filter(todo=> todo.completed === false));
                break;
              default:
                setFilteredTodos(todos);
                break;
            }
          }

          //run once , remember it should declare up to the below useEffect  
          useEffect(()=>{
            getLocalTodos()
         },[])

         
          //for updating the UI we shoudl use the  filterHandler inside the 'useEffect'
          useEffect(()=>{
              filterHandler();
              savaTodosToLocalStorage(); 
          },[todos,status]);

          
         
          // Save todos to Local storage;
          const  savaTodosToLocalStorage = ()=>{
            localStorage.setItem('todos',JSON.stringify(todos))
          }

          const getLocalTodos = ()=>{
            if(localStorage.getItem('todos')=== 'null'){
              localStorage.setItem('todos',JSON.stringify([]))
           }
           else{
             let localTodos =  JSON.parse(localStorage.getItem('todos'));
             setTodos(localTodos )
           } 
          }

  return (
    <div>
      <header>
      <h1>FO's Todo List</h1>
      </header>
      <Form 
      
      setStatus={setStatus } 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos = {filteredTodos}/>
    </div>
  )
}

export default App