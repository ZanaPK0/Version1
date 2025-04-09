/**
 * Home.jsx
 *
 * This is the main landing page of the application. It allows users to search for weather
 * in a specific city and displays the current weather conditions for the selected location.
 *
 * Redux:
 * - Uses `useDispatch` to trigger `fetchCurrentLocationWeather` when a city is searched.
 * - Uses `useSelector` to access:
 *   - `currentLocationWeather`: the current weather data for the selected city.
 *   - `loading`: status for showing a loading indicator.
 *   - `error`: any error message from the fetch operation.
 *
 * Components Used:
 * - `SearchInput`: A reusable search bar for entering city names.
 * - `WeatherItem`: A card component to display current weather details.
 *
 * UI Features:
 * - Styled with Tailwind CSS to provide a modern, clean layout.
 * - Handles different UI states:
 *   - Loading
 *   - Error
 *   - No data
 *   - Successfully fetched weather
 *
 * Usage:
 * This component is rendered at the `/` route. It manages only **current weather**, not forecasts.
 * Forecast-related features are handled on a separate route/component (e.g. PageTwo).
 */

import React from "react";
import { useSelector } from "react-redux";
import SearchInput from "../Components/WeatherSearch/SearchInput";
import WeatherItem from "../Components/WeatherSearch/WeatherItem";
import { fetchCurrentLocationWeather } from "../Reducers/weatherSearchSlice";

import { useDispatch } from "react-redux";

function Home() {
  // const { weatherData, loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const { currentLocationWeather, loading, error } = useSelector(
    (state) => state.weather ?? {}
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      <div className="max-w-3xl mx-auto bg-cyan-50 rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4 text-sky-800">
          Weather at specific location
        </h1>
        <p className="mb-6 text-gray-600">
          Search for the weather in a city below:
        </p>

        <SearchInput
          onSearch={(query) => dispatch(fetchCurrentLocationWeather(query))}
        />

        <div className="mt-6">
          {loading && <p className="text-blue-500">Loading weather data...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {currentLocationWeather ? (
            <WeatherItem weather={currentLocationWeather} />
          ) : (
            !loading && (
              <p className="text-gray-500">No weather data available.</p>
            )
          )}
        </div>
      </div>
    </main>
  );
}
export default Home;
