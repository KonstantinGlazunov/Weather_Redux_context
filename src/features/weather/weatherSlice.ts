import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WeatherState from "./types/WeatherState";
import * as api from "./weatherApi"

const initialState: WeatherState = {
  weatherData: undefined,
//  city: ""
}

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather", //type
  async (city:string) => api.getWeather(city) //payload Product[], то что возвращает api
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {/*
    setCity:(state, action:PayloadAction<string>)=> {
      state.city = action.payload;
    }
  */},
extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
      })
  }
});



//export const {setCity} = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;


