import React,{useContext} from 'react'
import ListItem from './ListItem'
import {DataContext} from './Data'

export default function Listtodo() {
    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id =>{
        const newTodos = [...todos]
        newTodos.forEach((todo,index) => {
            if(index === id){
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }
    
    const handleEditTodos = (editvalue, id) =>{
        const newTodos =[...todos]
        newTodos.forEach((todo, index)=>{
            if(index === id){
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }

  return (
    <ul>  
        {
            todos.map((todo, index) => (
                <ListItem todo={todo} key={index} id={index} 
                checkComplete={switchComplete} handleEditTodos={handleEditTodos}/>
            ))
        }
    </ul>
  )
}
