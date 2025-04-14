/**
 * WeatherItem.jsx
 *
 * A presentational component that displays the current weather conditions
 * for a specific location, including temperature, condition, and local time.
 *
 * Props:
 * - `weather` (object): The weather data object expected to include:
 *   - `location`: An object with city, region, country, and localtime.
 *   - `current`: An object with current temperature and condition info.
 *
 * Validation:
 * - If any critical weather data (`location` or `current`) is missing, the component
 *   renders a fallback message indicating that no weather data is available.
 *
 * UI Structure:
 * - Location details (city, country, region, local time)
 * - Current weather stats (temperature, condition)
 *
 * Styling:
 * - Uses Tailwind CSS for spacing, borders, and typography
 * - Rendered inside a styled `main` element with a card-like layout
 *
 * Usage:
 * Typically used within pages or lists to show weather data for a single city.
 * Does not display forecast data — only current conditions.
 */

function WeatherItem({ weather }) {
  if (!weather || !weather.location || !weather.current) {
    return <div role="alert">No Weather Data available...</div>;
  }

  const { location, current } = weather;

  return (
    <main
      className="bg-white shadow-md rounded-xl p-4 border border-gray-100 dark:bg-gray-800 dark:text-orange-300"
      role="region"
      aria-label={`Weather for ${location.name}, ${location.country}`}
    >
      <h2 className="text-xl font-semibold text-blue-700 mb-2 dark:text-amber-200">
        {location.name}, {location.country}
      </h2>

      <div
        className="text-sm text-gray-600 mb-2 dark:text-orange-300"
        aria-label="Location details "
      >
        <p>
          <strong>Region:</strong>{" "}
          <span aria-label={`Region: ${location.region}`}>
            {location.region}
          </span>
        </p>
        <p>
          <strong>Local Time:</strong>{" "}
          <time dateTime={location.localtime}>{location.localtime}</time>
        </p>
      </div>

      <div aria-label="Current weather conditions">
        <h3 className="font-medium text-gray-800">Current Conditions</h3>
        <p>
          <strong>Temperature:</strong>{" "}
          <span aria-label={`Temperature: ${current.temp_c} degrees Celsius`}>
            {current.temp_c}°C
          </span>
        </p>
        <p>
          <strong>Condition:</strong>{" "}
          <span aria-label={`Condition: ${current.condition.text}`}>
            {current.condition.text}
          </span>
        </p>
      </div>
    </main>
  );
}

export default WeatherItem;
