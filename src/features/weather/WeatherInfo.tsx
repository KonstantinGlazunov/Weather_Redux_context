import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function WeatherInfo() {
  const info  = useSelector ((state: RootState)=> state.weather.weatherData)  !!!!!!!!!!!!!!
  
  
  return (
    <div>
         <p>WeatherInfo in {info?.name}</p>
<p>Temp: {info?.main.temp}</p>
<p>Wind speed: {info?.wind.speed}</p>         
        </div>
  )
}
