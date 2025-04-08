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
    return <div>No Weather Data available...</div>;
  }

  const { location, current } = weather;

  return (
    <main className="bg-white shadow-md rounded-xl p-4 border border-gray-100">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">
        {location.name}, {location.country}
      </h2>

      <div className="text-sm text-gray-600 mb-2">
        <p><strong>Region:</strong> {location.region}</p>
        <p><strong>Local Time:</strong> {location.localtime}</p>
      </div>

      <div>
        <h3 className="font-medium text-gray-800">Current Conditions</h3>
        <p><strong>Temperature:</strong> {current.temp_c}°C</p>
        <p><strong>Condition:</strong> {current.condition.text}</p>
      </div>
    </main>
  );
}

export default WeatherItem;




