// WeatherJournal Component
const WeatherJournal = ({ journal }) => {
    return (
      <div className="weather-journal">
        <h2>Weather Journal</h2>
        <ul>
          {journal.map((entry, index) => (
            <li key={index}>{entry.city}: {entry.condition}, {entry.temperature}°</li>
          ))}
        </ul>
      </div>
    );
  };

export default WeatherJournal;