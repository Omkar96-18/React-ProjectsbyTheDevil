import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const TaskList = () => {
    const { state, dispatch } = useContext(TaskContext)
    const { tasks, filter } = state

    const filteredTask = tasks.filter(task => {
        if (filter === 'active') return !task.completed
        if (filter === 'completed') return task.completed
        return true
    })

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <div className="flex justify-center gap-4 mb-4">
                {['all', 'active', 'completed'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => dispatch({ type: 'SET_FILTER', payload: tab })}
                        className={`text-sm px-3 py-1 rounded 
                        ${filter === tab
                                ? 'bg-indigo-600 text-white'
                                : 'text-indigo-600 border border-indigo-600'
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div >
            <p className="text-center text-sm text-gray-500 mb-2">
                Showing: <span className="font-medium capitalize">{filter}</span> tasks
            </p>
            {filteredTask.length === 0 ? (
                <p className="text-center text-gray-500">No tasks</p>
            ) : (
                filteredTask.map(task => (
                    <div
                        key={task.id}
                        className="flex justify-between items-center p-2 border-b"
                    >
                        <span
                            className={task.completed ? 'line-through text-gray-300' : 'text-gray-100'}
                        >
                            {task.text}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => dispatch({
                                    type: 'TOGGLE_TASK',
                                    payload: task.id,

                                })}
                                className="text-green-600 text-sm"
                            >
                                {task.completed ? 'Undo' : 'Done'}
                            </button>
                            <button
                                onClick={() => dispatch({
                                    type: 'DELETE_TASK',
                                    payload: task.id
                                })}
                                className="text-red-600 text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};



export default TaskList