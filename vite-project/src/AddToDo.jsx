import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddToDo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      setError('Todo title cannot be empty');
      return;
    }
    addTodo({
      id: Math.random().toString(36).substr(2, 9),
      title,
      isDone: false
    });
    setTitle('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add new todo..." 
        value={title} 
        onChange={handleInputChange} 
      />
      <button type="submit">Add</button>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </form>
  );
};

AddToDo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddToDo;
