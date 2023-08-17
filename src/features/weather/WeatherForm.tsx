import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchWeather } from './weatherSlice';

export default function WeatherForm():JSX.Element {
  const [city, setCity]= useState("");
  const dispatch = useDispatch();

  const handleSubmit  = (e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  dispatch(fetchWeather(city) as any);  //обход типизации !!!!!!!!!!!!  
  setCity('');
};


    return (
    <div>
        <form onSubmit={handleSubmit} >
<input type="text" 
placeholder='your city'
onChange={(e)=>setCity(e.target.value)}
// value = {city}
/>
<button type="submit">Get weather</button>

        </form>
        
        
        
        </div>
  )
}
