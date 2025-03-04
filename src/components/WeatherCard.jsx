// WeatherCard Component
const WeatherCard = ({ weather, unit, onSaveFavorite, onSaveJournal }) => {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <img src={weather.icon} alt={weather.condition} />
      <p><strong>{weather.condition}</strong></p>
      <p>🌡️ Temperature: {weather.temperature}°{unit === "metric" ? "C" : "F"}</p>
      <p>💨 Wind Speed: {weather.windSpeed} {unit === "metric" ? "m/s" : "mph"}</p>
      <p>💧 Humidity: {weather.humidity}%</p>
      <button onClick={onSaveFavorite}>⭐ Save to Favorites</button>
      <button onClick={onSaveJournal}>📖 Save to Journal</button>
    </div>
  );
};

export default WeatherCard;