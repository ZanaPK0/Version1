/**
 * PageTwo.jsx
 *
 * This page allows users to search for a city's weather and view both current conditions
 * and detailed hourly forecasts. It provides a more in-depth view than the
 * homepage, making it ideal for checking future weather patterns.
 *
 * Redux:
 * - Uses `useDispatch` to trigger the `fetchSearchedWeather` thunk based on user input.
 * - Uses `useSelector` to access:
 *   - `searchedWeather`: the fetched weather data including forecast.
 *   - `loading`: indicates if weather data is currently being fetched.
 *   - `error`: any error encountered during the fetch process.
 *
 * Components Used:
 * - `SearchInput`: A reusable input component that accepts city names and triggers search.
 * - `WeatherItem`: Displays the current weather for the searched city.
 * - `HourlyForecast`: A scrollable list showing hourly weather data for a selected forecast day.
 *
 * Forecast Features:
 * - Renders a day forecast from `forecast.forecastday`.
 * - Displays detailed day info: max, min, avg temp, and condition.
 * - Each day includes a scrollable 24-hour forecast breakdown via the `HourlyForecast` component.
 *
 * UI & Structure:
 * - Structured with semantic HTML tags (`<main>`, `<section>`, `<article>`)
 * - Responsive, clean UI using Tailwind CSS.
 * - Gracefully handles loading, error, and empty states.
 *
 * Usage:
 * Rendered on a route like `/forecast` or `/pagetwo`, this page focuses on both
 * current conditions and extended forecast details for user-searched cities.
 */

import React from "react";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchInput from "../Components/WeatherSearch/SearchInput";
import WeatherItem from "../Components/WeatherSearch/WeatherItem";
import { fetchSearchedWeather } from "../Reducers/weatherSearchSlice";
import HourlyForecast from "../Components/WeatherSearch/HourlyForecast";
import { useDispatch } from "react-redux";
import ThemeButtons from "../Components/Themes/ThemeButtons";

function PageTwo() {
  const dispatch = useDispatch();
  const { searchedWeather, loading, error } = useSelector(
    (state) => state.weather ?? {}
  );
  const forecastDays = searchedWeather?.forecast?.forecastday ?? [];

  // Focus ref for search results
  const resultsRef = useRef(null);

  useEffect(() => {
    if (searchedWeather && resultsRef.current) {
      resultsRef.current.focus();
    }
  }, [searchedWeather]);

  return (
    <>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-white text-blue-700 px-3 py-1 rounded shadow "
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="mb-14 min-h-screen bg-gradient-to-b from-blue-100 to-white p-6 "
        role="main"
        aria-label="Weather search and forecast section"
      >
        <ThemeButtons />

        <section
          className="max-w-3xl mx-auto bg-cyan-50 rounded-2xl shadow-md p-6 "
          role="region"
          aria-labelledby="forecast-heading"
        >
          <h2
            id="forecast-heading"
            className="text-3xl font-bold mb-4 text-sky-800"
          >
            Weather Forecast
          </h2>
          <p className="mb-6 text-gray-600">
            Search for the weather in a city below:
          </p>

          <SearchInput
            onSearch={(query) => dispatch(fetchSearchedWeather(query))}
          />

          <article
            className="mt-6 outline-none "
            role="region"
            aria-label="Current weather results"
            ref={resultsRef}
            tabIndex={-1} // makes it programmatically focusable
          >
            {loading && (
              <p className="text-blue-500" role="status" aria-live="polite">
                Loading weather data...
              </p>
            )}
            {error && (
              <p className="text-red-500" role="alert">
                Error: {error}
              </p>
            )}
            {searchedWeather ? (
              <WeatherItem weather={searchedWeather} />
            ) : (
              !loading && (
                <p className="text-gray-500" role="note">
                  No weather data available.
                </p>
              )
            )}
          </article>

          {/* Forecast info */}
          {forecastDays.length > 0 && (
            <section
              className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200 dark:bg-gray-800 dark:text-orange-300"
              role="region"
              aria-label="Multi-day forecast"
            >
              {forecastDays.map((forecastday) => (
                <article
                  key={forecastday.date}
                  className="mb-6"
                  aria-labelledby={`day-${forecastday.date}`}
                >
                  <h3
                    id={`day-${forecastday.date}`}
                    className="text-lg font-semibold mb-2 "
                  >
                    Forecast for {forecastday.date}
                  </h3>
                  <p>
                    <strong>Max Temp:</strong> {forecastday.day.maxtemp_c}°C
                  </p>
                  <p>
                    <strong>Avg Temp:</strong> {forecastday.day.avgtemp_c}°C
                  </p>
                  <p>
                    <strong>Min Temp:</strong> {forecastday.day.mintemp_c}°C
                  </p>
                  <p>
                    <strong>Condition:</strong> {forecastday.day.condition.text}
                  </p>

                  <section
                    role="region"
                    aria-label={`Hourly forecast for ${forecastday.date}`}
                    className="mt-4"
                  >
                    <h4 className="text-xl font-bold mb-2">Hourly Forecast</h4>
                    <HourlyForecast forecastday={forecastday} />
                  </section>
                </article>
              ))}
            </section>
          )}
        </section>
      </main>
    </>
  );
}

export default PageTwo;
