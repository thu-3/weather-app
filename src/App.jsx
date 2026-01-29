import { useState } from "react"
import "./App.css"

const Weather = () => {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  const API_KEY = "24293ecb38a03fbc5d8efba84c9d3b8d"

  const getWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=madanapalle&units=metric&appid=18dcebc5a9e399f78818907511424fd9"
    )
      .then(res => res.json())
      .then(data => {
        setWeather(data)
      })
      .catch(() => {
        alert("City not found")
      })
  }

  return (
    <div className="container">
      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {weather && weather.main && (
        <div className="card">
          <h3>{weather.name}</h3>
          <p> Temperature: {weather.main.temp} °C</p>
          <p> Humidity: {weather.main.humidity}%</p>
          <p> Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default Weather