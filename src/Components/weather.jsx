import { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setData(null);

      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error.message);
      }

      setData(result);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-page">
      <h1>Weather Search</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city (e.g. Chennai)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {data && (
        <div className="weather-card">
          <h2>{data.location.name}, {data.location.country}</h2>
          <h3>{data.current.temp_c}°C</h3>
          <img src={data.current.condition.icon} alt="weather icon" />
          <p>{data.current.condition.text}</p>
          <p>Humidity: {data.current.humidity}%</p>
          <p>Wind: {data.current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
}

export default Weather;