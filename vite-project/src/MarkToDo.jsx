import React from 'react';
import PropTypes from 'prop-types';

const MarkToDo = ({ markTodo }) => {
  return (
    <button onClick={markTodo}>Mark as Done</button>
  );
};

MarkToDo.propTypes = {
  markTodo: PropTypes.func.isRequired
};

export default MarkToDo;
