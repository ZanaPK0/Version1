function WeatherItem({ weather }) {
  if (!weather || !weather.location || !weather.current) {
    return <div>No Weather Data available...</div>;
  }

  const { location, current } = weather;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-100">
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
    </div>
  );
}

export default WeatherItem;





// function WeatherItem({ weather }) {
//   if (!weather || !weather.location || !weather.current || weather.forecast) {
//     return <div>No Weather Data available...</div>;
//   }



//   const { location, current, forecast } = weather;
// console.log(weather);

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4 border border-gray-100">
//       <h2 className="text-xl font-semibold text-blue-700 mb-2">
//         {location.name}, {location.country}
//       </h2>
//       <div className="text-sm text-gray-600 mb-2">
//         <p><strong>Region:</strong> {location.region}</p>
//         <p><strong>Local Time:</strong> {location.localtime}</p>
//       </div>
//       <div>
//         <h3 className="font-medium text-gray-800">Current Conditions</h3>
//         <p><strong>Temperature:</strong> {current.temp_c}°C</p>
//         <p><strong>Condition:</strong> {current.condition.text}</p>
//       </div>
//       <div>
//         <h3 className="font-medium text-gray-800">1 Day Forecast</h3>
//         <p><strong>Forecast:</strong> {forecast.forecastday[0].date}</p>
//         {/* <p><strong>Condition:</strong> {forecast.forecastday.}</p> */}
//       </div>
//     </div>
//   );
// }
// export default WeatherItem;