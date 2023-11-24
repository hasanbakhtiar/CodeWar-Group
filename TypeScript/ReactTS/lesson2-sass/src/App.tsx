import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

interface Todo{
    id:string,
    text:string
}

const App: React.FC = () => {
    const [todos,setTodos] = useState<Todo[]>([
        {
            id:"1",
            text:"todo one"
        },
        {
            id:"2",
            text:"todo two"
        },
        {
            id:"3",
            text:"todo three"
        }
    ]);
    const todoAddHandler=(comingtext:string)=>{
        setTodos((prevTodo)=>[
            ...prevTodo,
            {id:crypto.randomUUID(),text:comingtext}
        ])
    }
    const todoDeleteHandler=(todoId:string)=>{
        setTodos((prevTodo)=>{
            return prevTodo.filter((todo)=>todo.id !== todoId);
        })
    }
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Todo App</h1>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} ondeleteTodo = {todoDeleteHandler}/>
    </div>
  );
};

export default App;
