/**
 * HourlyForecast.jsx
 * 
 * This component displays the hourly weather forecast for a selected day.
 * It shows weather data for each hour in a scrollable horizontal layout.
 *
 * Props:
 * - `forecastday`: An object representing a single day's forecast from the weather API.
 *   - Includes an `hour` array with 24 hourly forecast entries.
 *
 * UI Features:
 * - Scrollable horizontal layout using Tailwind classes (`flex`, `overflow-x-scroll`, etc.)
 * - Responsive card sizes based on screen width (sm, md breakpoints).
 * - Displays each hour's:
 *   - Time
 *   - Temperature in Celsius
 *   - Weather condition (text)
 *
 * Usage:
 * This component is designed to be used inside a parent forecast layout
 * (e.g., `PageTwo`), where `forecastday` is passed as a prop.
 */


import React from "react";

const HourlyForecast = ({ forecastday }) => {
  return (
    <section className="flex flex-row overflow-hidden overflow-x-scroll space-x-4">
      {forecastday.hour.slice(0, 24).map((hourData, index) => (
        <article
          key={index}
          className="bg-gray-100 p-3 rounded-lg shadow-sm flex-shrink-0 w-2/2 sm:w-1/2 md:w-1/3"
        >
          <p>
            <strong>Time:</strong> {hourData.time}
          </p>
          <p>
            <strong>Temp:</strong> {hourData.temp_c}°C
          </p>
          <p>
            <strong>Condition:</strong> {hourData.condition.text}
          </p>
        </article>
      ))}
    </section>
  );
};

export default HourlyForecast;
