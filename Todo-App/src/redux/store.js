import todoReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer: todoReducer}) 
export default store