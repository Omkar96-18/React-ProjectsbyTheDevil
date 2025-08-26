// components/TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      <span
        className={todo.completed ? 'completed' : ''}
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.task}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>

  )
};

export default TodoItem;
