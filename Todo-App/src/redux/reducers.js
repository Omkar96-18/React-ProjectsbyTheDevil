import { useEffect } from 'react'
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER} from './actions'
import {nanoid} from 'nanoid'
// import { combineReducers } from 'redux'

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    filter: 'all'
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nanoid(),
                        task: action.payload,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                )
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => 
                    todo.id !== action.payload
                )
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
    
        default:
            return state
    }
}

export default todoReducer