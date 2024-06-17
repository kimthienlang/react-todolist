import React, { useEffect, useState } from 'react'

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  function persistData (newList) {
    localStorage.setItem('todos', 
      JSON.stringify({todos: newList}))
  }

  function handleAddTodos (newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo (todoIndex) {
    const newTodoList = todos.filter((item, index) => {
      return index != todoIndex
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo (todoIndex) {
    const valueToBeEdited = todos[todoIndex]
    setInputValue(valueToBeEdited)
    handleDeleteTodo(todoIndex)
  }

  useEffect(() => {
    if (!localStorage) return
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) return
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <main>
      <div className="board">
        <TodoInput 
        inputValue={inputValue} 
        setInputValue={setInputValue}
        handleAddTodos={handleAddTodos} 
        />

        <TodoList 
        todos={todos} 
        handleDeleteTodo={handleDeleteTodo} 
        handleEditTodo={handleEditTodo}
        />
      </div>
    </main>
  );
}
