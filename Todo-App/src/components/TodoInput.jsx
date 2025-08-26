import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'

function TodoInput() {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (task) {
      dispatch(addTodo(task))
      setTask('')
    }
  }
  return (
    <div className="todo-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>

  )
}

export default TodoInput