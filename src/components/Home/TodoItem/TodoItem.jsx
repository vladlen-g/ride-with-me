import React, { PropTypes } from 'react';
require('./TodoItem.scss');

const propTypes = {
  children: PropTypes.string,
  completed: PropTypes.bool,
  onComplete: PropTypes.func,
  onRemove: PropTypes.func
};

function TodoItem({ children, completed, onComplete, onRemove }) {
  let className = "todoItem";

  if (completed) {
    className += " completed";
  }
  return (
    <div className={className} onClick={onComplete}>
      {children}
      <button onClick={onRemove} className="close">x</button>
    </div>
  )
}

TodoItem.propTypes = propTypes;

export default TodoItem;
