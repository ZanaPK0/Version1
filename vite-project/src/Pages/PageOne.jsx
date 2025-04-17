/**
 * PageOne.jsx
 *
 * This page displays current weather data for multiple predefined cities in Sweden.
 * It automatically fetches and renders weather cards for each city using Redux state.
 *
 * Redux:
 * - Uses `useDispatch` to trigger `fetchMultipleCities` on component mount.
 * - Uses `useSelector` to access:
 *   - `citiesWeatherData`: an array of weather objects for selected Swedish cities.
 *   - `loading`: boolean to show a loading state while fetching data.
 *   - `error`: any errors returned during the fetch operation.
 *
 * Components Used:
 * - `WeatherItem`: A presentational card component that displays current weather
 *   details for a single city.
 *
 * Lifecycle:
 * - On initial render, `useEffect` dispatches the `fetchMultipleCities` thunk.
 *
 * UI Features:
 * - Responsive grid layout to display multiple weather cards side by side.
 * - Displays appropriate feedback for loading, errors, or empty results.
 * - Tailwind CSS is used for modern and responsive styling.
 *
 * Usage:
 * Typically rendered on a route like `/cities` or `/sweden`, this page focuses
 * on presenting multiple current-weather snapshots at once — not forecasts.
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultipleCities } from "../Reducers/weatherCitiesSlice";
import WeatherItem from "../Components/WeatherSearch/WeatherItem";
import ThemeButtons from "../Components/Themes/ThemeButtons";

function PageOne() {
  const dispatch = useDispatch();
  const { citiesWeatherData, loading, error } = useSelector(
    (state) => state.weatherCities
  ); // useSelector listens to the changes of weatherCities slice as the thunk progresses.

  useEffect(() => {
    dispatch(fetchMultipleCities());
  }, [dispatch]); // calling dispatch(fetchMultipleCities()); to dispatch an async thunk, the API call fetch for multiplecities. This runs only on mount.

  if (loading) {
    return (
      <p role="status" aria-live="polite">
        Loading cities...
      </p>
    );
  }

  if (error) {
    return <p role="alert">Error: {error}</p>;
  }

  return (
    <main
      className="mb-14 min-h-screen bg-gradient-to-b from-sky-100 to-white p-6"
      role="main"
      aria-label="Swedish cities weather overview"
    >
      <ThemeButtons />

      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-sky-800">
          Weather in different parts of Sweden
        </h1>

        {loading && (
          <p className="text-blue-500" role="status" aria-live="polite">
            Loading cities...
          </p>
        )}
        {error && (
          <p className="text-red-500" role="alert">
            Error: {error}
          </p>
        )}

        <article
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="region"
          aria-label="Weather cards for Swedish cities"
        >
          {citiesWeatherData && citiesWeatherData.length > 0
            ? citiesWeatherData.map((weather, index) => (
                <WeatherItem key={index} weather={weather} />
              ))
            : !loading && (
                <p className="text-gray-500" role="note">
                  No weather data available...
                </p>
              )}
        </article>
      </section>
    </main>
  );
}

export default PageOne;
