import { createSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import { fetchWeather } from "../Api";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeather.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload
        })
        .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload || "Failed to Fetch Weather"
        })
    }
})

export default weatherSlice.reducer