import React, { createContext, useEffect, useReducer} from 'react'
import { taskReducer } from '../reducer/taskReducer'

const TaskContext = createContext()

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    filter: 'all'
}


export const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }, [state.tasks])

    const value = {state, dispatch}
    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext