import React from 'react';
import './App.css';
import Parent from './contextComponents/Parent';
import WeatherInfo from './features/weather/WeatherInfo';
import WeatherForm from './features/weather/WeatherForm';

function App() {
  return (
    <div className="App">
    <WeatherInfo />
    <WeatherForm />
     <p>__________________</p>
     <Parent />
    
    </div>
  );
}

export default App;
