import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Favorites from "./components/Favorites";
import WeatherJournal from "./components/WeatherJournal";

import "./index.css";
import debounce from "lodash.debounce";

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const WEATHERAPI_KEY = process.env.REACT_APP_WEATHERAPI_KEY;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);
  const [weatherJournal, setWeatherJournal] = useState(() => JSON.parse(localStorage.getItem("weatherJournal")) || []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("weatherJournal", JSON.stringify(weatherJournal));
  }, [favorites, weatherJournal]);

  const getWeather = useCallback(
    (cityName) => {
      const fetchWeather = debounce(async (cityName) => {
        try {
          const geoRes = await axios.get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${OPENWEATHER_API_KEY}`
          );
          if (!geoRes.data.length) throw new Error("City not found!");
          const { lat, lon } = geoRes.data[0];
  
          const [openWeatherRes, weatherAPIRes] = await Promise.all([
            axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=${unit}`
            ),
            axios.get(
              `https://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_KEY}&q=${lat},${lon}&days=5&aqi=no&alerts=no`
            )
          ]);
  
          setWeather({
            city: openWeatherRes.data.name,
            temperature: openWeatherRes.data.main.temp,
            weather: openWeatherRes.data.weather[0].description,
            humidity: openWeatherRes.data.main.humidity,
            windSpeed: openWeatherRes.data.wind.speed,
            condition: weatherAPIRes.data.current.condition.text,
            icon: weatherAPIRes.data.current.condition.icon,
            forecast: weatherAPIRes.data.forecast.forecastday,
          });
        } catch (error) {
          alert(error.message);
        }
      }, 500);
  
      fetchWeather(cityName);
    },
    [unit] // Dependency list
  );
  

  const toggleUnit = () => setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));

  const saveFavorite = () => {
    if (weather && !favorites.includes(weather.city)) setFavorites([...favorites, weather.city]);
  };

  const saveWeatherJournal = () => {
    if (weather) setWeatherJournal([...weatherJournal, weather]);
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <SearchBar onSearch={getWeather} onToggleUnit={toggleUnit} unit={unit} />
        {weather && <WeatherCard weather={weather} unit={unit} onSaveFavorite={saveFavorite} onSaveJournal={saveWeatherJournal} />}
        <Favorites favorites={favorites} onSelect={getWeather} />
        <WeatherJournal journal={weatherJournal} />
      </div>
    </div>
  );
};

export default App;

