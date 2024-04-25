import React from 'react';
import PropTypes from 'prop-types';

const DeleteToDo = ({ deleteTodo }) => {
  return (
    <button onClick={deleteTodo}>Delete</button>
  );
};

DeleteToDo.propTypes = {
  deleteTodo: PropTypes.func.isRequired
};

export default DeleteToDo;
