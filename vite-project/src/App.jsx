import React, { useState } from 'react';
import AddToDo from './AddToDo';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import DeleteToDo from './DeleteToDo';
import MarkToDo from './MarkToDo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const markTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: true } : todo));
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <AddToDo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} markTodo={markTodo} />
    </div>
  );
};

export default App;
