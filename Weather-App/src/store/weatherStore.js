import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../slices/weatherSlice'


export const weatherStore = configureStore({
    reducer: {
        weather: weatherReducer,
    }
})