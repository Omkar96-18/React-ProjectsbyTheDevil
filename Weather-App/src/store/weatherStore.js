import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slices/weatherSlice";
import weatherReducer from '../slices/weatherSlice'


export const weatherStore = configureStore({
    reducer: {
        weather: weatherReducer,
    }
})