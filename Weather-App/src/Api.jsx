import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";


const API_KEY = import.meta.env.VITE_API_KEY;
// const API_KEY = '0275114a58962dc09bd02f4fc173ebeb'

const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5`
})

export const fetchWeather = createAsyncThunk('weather/fetchWeather',
    async({city_name, country_name}) => {
    try {
        // return api.get(`/weather?q=${city_name},${country_name}&appid=${API_KEY}`)
        const res = await api.get('/weather', {
            params: {
                q: `${city_name},${country_name}`,
                appid: API_KEY,
                units: 'metric'
            }
        })
        // console.log(res);
        
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
})