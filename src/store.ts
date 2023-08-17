import { configureStore } from "@reduxjs/toolkit";
import {  weatherReducer } from "./features/weather/weatherSlice";

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        //city: setCity, //было  
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

