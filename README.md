# Weather Dashboard

## Overview
The **Weather Dashboard** is a React.js application that allows users to search for city weather data using OpenWeather API and WeatherAPI. The app provides real-time weather updates, a five-day forecast, and features such as favorites, a weather journal, and unit conversion.

## Features
- **City Weather Search:** Fetch weather details using OpenWeather and WeatherAPI.
- **Dynamic Visualization:** Displays current temperature, humidity, wind speed, and weather conditions.
- **Forecast Cards:** Provides a 5-day weather forecast with icons.
- **Favorites List:** Save frequently checked cities for quick access.
- **Weather Journal:** Keep a record of previous weather lookups.
- **Unit Conversion:** Toggle between Metric (°C) and Imperial (°F) units.
- **Debounced API Calls:** Efficiently fetches data with optimized network requests.

## Tech Stack
- **Frontend:** React.js (with hooks like `useState`, `useEffect`, `useCallback`)
- **API Services:** OpenWeather API, WeatherAPI
- **State Management:** React Hooks
- **Data Storage:** Local Storage (for favorites & journal)
- **Styling:** CSS

## Installation & Setup

### Prerequisites
Ensure you have Node.js and npm installed.

### Clone Repository
```sh
git clone https://github.com/your-repo/weather-dashboard.git
cd weather-dashboard
```

### Install Dependencies
Once you're in the project directory, install the required dependencies by running:

```sh
npm install
```
## API Keys
To use the weather APIs, you'll need API keys from OpenWeather and WeatherAPI.

**OpenWeather API:** Sign up at OpenWeather and obtain your API key.
**WeatherAPI:** Sign up at WeatherAPI for your API key.
Once you have the keys, create a .env file in the root of your project and add the following:

```sh
REACT_APP_OPENWEATHER_API_KEY=your-openweather-api-key
REACT_APP_WEATHERAPI_API_KEY=your-weatherapi-api-key
```

## Run the App
After setting up the environment variables, start the development server by running:

```sh
npm start
```
