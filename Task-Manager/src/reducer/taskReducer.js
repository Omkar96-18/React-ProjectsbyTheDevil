export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }

        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }

        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)
            }

        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload        
            }

        default:
            return state
    }
}