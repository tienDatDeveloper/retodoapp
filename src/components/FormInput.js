import React, {useState, useContext, useRef, useEffect} from 'react'
import {DataContext} from './Data'

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const todoInput = useRef();

  const addTodo = e =>{
    e.preventDefault();
    setTodos([...todos,{name: todoName, complete: false}])
    setTodoName('');
    todoInput.current.focus();
  }
  useEffect(() =>{
    todoInput.current.focus();
  },[])

  return (
    <form autoComplete = "off" onSubmit ={addTodo}> 
        <input type="text" name="todo" id="todo" ref={todoInput}
        required placeholder="Những Việc Cần Làm" value={todoName} 
        onChange ={e => setTodoName(e.target.value.toLowerCase())}/>
        <button type="submit" className="submitCreate">Tạo</button>
      
    </form>
  )
}
