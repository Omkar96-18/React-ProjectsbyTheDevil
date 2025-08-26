import React, { useState } from 'react'
import './todolist.css'
function TodoList() {
    const [inputText, setInputText] = useState('')
    const [task, setTask] = useState([])

    const addTask = () => {
        if (inputText === '') return;

        const newTask = {
            id: Date.now(),
            text: inputText,
            completed: false,
        }

        setTask([...task, newTask])
        setInputText('')
    }

    const deleteTask = (id) => {
        setTask(task.filter(task => task.id !== id))
    }

    const toggleComplete = (id) => {
        setTask(
            task.map(task => task.id === id ? {
                ...task,
                completed: !task.completed
            } : task
            )
        )
    }
    return (
        <div className="todo-container">
            <input
                type="text"
                className="todo-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button className="add-button" onClick={addTask}>Add</button>

            <ul className="task-list">
                {task.map(task => (
                    <li className="task-item" key={task.id}>
                        <span className={task.completed ? 'completed' : ''}>
                            {task.text}
                        </span>
                        <button className="complete-button" onClick={() => toggleComplete(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button className="delete-button" onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default TodoList