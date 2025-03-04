import React from "react";

const Favorites = ({ favorites, onSelect }) => {
  return (
    <div className="favorites">
      <h3>⭐ Favorite Locations</h3>
      <ul>
        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          favorites.map((city, index) => (
            <li key={index} onClick={() => onSelect(city)}>
              {city}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Favorites;
