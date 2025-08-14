import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import {nanoid} from 'nanoid'

const TaskForm = () => {
    const {dispatch} = useContext(TaskContext)
    const [text, setText] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (text.trim() === '') return

        const newTask = {
            id: nanoid(),
            text,
            completed: false,
        }

        dispatch({type: 'ADD_TASK', payload: newTask})
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-4"> 
            <input 
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter new task: "
            className="border px-4 py-2 w-1/2 rounded-l text-white"
            
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-r">
                Add
            </button>
        </form>
    )
}

export default TaskForm