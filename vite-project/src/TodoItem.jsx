import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, deleteTodo, markTodo }) => {
  return (
    <li>
      {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => markTodo(todo.id)}>Mark as Done</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markTodo: PropTypes.func.isRequired
};

export default TodoItem;
