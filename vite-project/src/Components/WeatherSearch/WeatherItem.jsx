function WeatherItem({ weather }) {
  if (!weather || !weather.location || !weather.current) {
    return <div>No Weather Data available...</div>;
  }

  const { location, current } = weather;

  return (
    <div className="weather-item border p-4">
      <h2>{location.name}</h2>
      <p><strong>Temperature:</strong> {current.temp_c}°C</p>
      <p><strong>Condition:</strong> {current.condition.text}</p>
    </div>
  );
}
export default WeatherItem;