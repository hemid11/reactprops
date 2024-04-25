import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, markTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => markTodo(todo.id)}>Mark as Done</button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markTodo: PropTypes.func.isRequired
};

export default TodoList;
