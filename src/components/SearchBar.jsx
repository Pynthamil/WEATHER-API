// SearchBar Component
import { useState } from "react";


const SearchBar = ({ onSearch, onToggleUnit, unit }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Enter city name..." value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={onToggleUnit}>Toggle °{unit === "metric" ? "F" : "C"}</button>
    </div>
  );
};

export default SearchBar;