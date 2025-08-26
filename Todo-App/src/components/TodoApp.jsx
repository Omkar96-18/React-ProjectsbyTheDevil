// components/TodoApp.js
import React, { useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';
import { ADD_TODO } from '../redux/actions';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo-app">
      <h1 className="todo-header">Todo App</h1>
      <TodoInput />

      <div className="filter-buttons">
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('active'))}>Active</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
      </div>

      <TodoList />
    </div>
  )
};

export default TodoApp;
