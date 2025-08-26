import React, { useState } from 'react'
import { fetchWeather } from '../Api'
import { useDispatch, useSelector } from 'react-redux'
import UserInput from './UserInput'


function UserOutput() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.weather)

  
  const handleFetch = ({ city, country }) => {
    try {
      dispatch(fetchWeather({
        city_name: city,
        country_name: country
      }))
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="app-container">
      <UserInput onSubmit={handleFetch} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error : {error}</p>}

      {data && (
        <div className={`weather-card ${data.weather[0].main.toLowerCase()}`}>
          <h2>Weather in {data.name}, {data.sys.country}</h2>

          {/* Weather Icon */}
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            className="weather-icon"
          />
          <h3><strong>Weather: </strong>{data.weather[0].main.toLowerCase()}</h3>
          <p><strong>Temperature:</strong> {data.main.temp}°C</p>
          <p><strong>Feels Like:</strong> {data.main.feels_like}°C</p>
          <p><strong>Condition:</strong> {data.weather[0].description}</p>
          <p><strong>Humidity:</strong> {data.main.humidity}%</p>
          <p><strong>Pressure:</strong> {data.main.pressure} hPa</p>
          <p><strong>Wind Speed:</strong> {data.wind.speed} m/s</p>
          <p><strong>Cloudiness:</strong> {data.clouds.all}%</p>
          <p><strong>Sunrise:</strong> {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p><strong>Sunset:</strong> {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  )
}

export default UserOutput