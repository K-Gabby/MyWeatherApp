import axios from 'axios';
import React, { useState } from 'react'


export default function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const handleCityChange = (event) => {
        setCity(event.target.value)
    };
    const fetchWeather = async () => {
        try {
           const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee86517eec3beb922173fb9957c97391&units=metric`)
           console.log(response.data);
           
           setWeather(response); 
        } 
        catch (error) {
            console.log("Error fetching weather data", error);
            alert("City not found or an error occurred!");  
        }
    }
    // console.log(weather, 'weather');
    
    const handleClick = () => {
        fetchWeather();
    }
  return (
    <div className='container'>
        <input autoFocus type="text" placeholder='Enter City Name' value={city} onChange={handleCityChange} />
        <button onClick={handleClick}>Get Weather</button>
        {weather && (
        <div className='weather-info'>
            <h3>{weather.data.name}</h3>
            <p>Temp is {weather.data.main.temp}°C</p>
            <p>{weather.data.weather[0].description}</p>
        </div>
        )}
    </div>
  );
}
