import React from 'react';
import { useState } from 'react';
import './App.css';
import  ToDoForm  from './components/ToDoForm';
import ToDo from './components/ToDo';

function App() {

  const [todos, setTodos] = useState([ ])

  const addTask = (userInput) => {
    if(userInput) {
      const newTask = {
        id: Date.now(),
        task: userInput
      }
    setTodos([...todos, newTask])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id != id )])
  }

  return (
    <div className="app">
      <header> 
        <h1> Список задач: {todos.length} </h1>
      </header>

      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo = {todo}
            removeTask = {removeTask}
          />
        )
      } 
    )}
    </div>
  );
}

export default App;
