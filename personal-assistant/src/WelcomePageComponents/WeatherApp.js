import React, { useState, useEffect } from 'react'
// import TodoEntry from './TodoEntry'
// import AddTodo from './AddTodo'
// import SearchBar from './SearchBar'
// // import { shownItems, entryCounter } from './list-controller'
import { BackgroundDiv, WeatherDiv, TodoLink } from '../styles'

const WeatherApp = () => {
  const [weather, setWeather] = useState({})
  const [refresher, setRefresher] = useState(0)
  const [pos, setPos] = useState({})
  if (refresher === 0) {
    setRefresher(1)
    navigator.geolocation.getCurrentPosition(
      position => {
        setPos({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      },
      error => {
        console.warn(`ERROR(${error.code}): ${error.message}`)
        setPos({
          lat: 42.3770,
          lon: -71.1167,
        })
      },
      { timeout: 10000 },
    )
  }
  useEffect(() => {
    if (pos.lat) {
      const fetchData = async () => {
        const link = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`
        const res = await fetch(link)
        const data = await res.json()
        setWeather(data)
      }
      fetchData()
    }
  }, [refresher, pos])
  return (
    <BackgroundDiv>
      <WeatherDiv>
        <div>
          <h1>Welcome!</h1>
          {weather.main
            ? (
              <div>
                <h2>{`Weather in ${weather.name}:`}</h2>
                <h3>{`${weather.weather[0].description.toUpperCase()}`}</h3>
                <h4>{`Temperature: ${weather.main.temp}°C`}</h4>
                <h4>{`High: ${weather.main.temp_max}°C`}</h4>
                <h4>{`Low: ${weather.main.temp_min}°C`}</h4>
                <h4>{`Feels Like: ${weather.main.feels_like}°C`}</h4>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" color="blue" />
              </div>
            )
            : <h2>Gathering weather data...</h2>}
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setWeather({})
              setRefresher(refresher + 1)
            }}
          >
            Refresh Weather
          </button>
          <button
            type="button"
            onClick={() => {
              setWeather({})
              setRefresher(0)
            }}
          >
            Refresh Location
          </button>
        </div>
      </WeatherDiv>
      <TodoLink to="/todo" />
    </BackgroundDiv>
  )
}

export default WeatherApp
