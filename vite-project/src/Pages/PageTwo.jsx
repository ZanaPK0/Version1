import React,  { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchInput from "../Components/WeatherSearch/SearchInput"
import WeatherItem from "../Components/WeatherSearch/WeatherItem"
import { fetchSearchedWeather } from "../Reducers/weatherSearchSlice";

import { useDispatch } from "react-redux";


  

function PageTwo(){

    const dispatch = useDispatch();

    const { searchedWeather, loading, error } = useSelector(
        (state) => state.weather ?? {}
      );
      const forecastDays = searchedWeather?.forecast?.forecastday ?? [];



    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
          <div className="max-w-3xl mx-auto bg-cyan-50 rounded-2xl shadow-md p-6">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">PageTwo</h2>
            <p className="mb-6 text-gray-600">Search for the weather in your city below:</p>
    
            <SearchInput onSearch={(query) => dispatch(fetchSearchedWeather(query))} />
    
            <div className="mt-6">
              {loading && <p className="text-blue-500">Loading weather data...</p>}
              {error && <p className="text-red-500">Error: {error}</p>}
              {searchedWeather ? (
                <WeatherItem weather={searchedWeather} />
              ) : (
                !loading && <p className="text-gray-500">No weather data available.</p>
              )}
            </div>

      {/* Render forecast info below each weather card */}
      {forecastDays.length > 0 && (
        <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2 text-gray-700 ">Forecast</h3>
          {forecastDays.map((forecastday) => (
            <div key={forecastday.date} className="mb-2"  >
              <p><strong>Date:</strong> {forecastday.date}</p>
              <p><strong>Max Temp:</strong> {forecastday.day.maxtemp_c}°C</p>
              <p><strong>Avg Temp:</strong> {forecastday.day.avgtemp_c}°C</p>
              <p><strong>Min Temp:</strong> {forecastday.day.mintemp_c}°C</p>
              <p><strong>Condition:</strong> {forecastday.day.condition.text}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                
  {forecastday.hour.slice(0, 24).map((hourData, index) => (
    <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm">
      <p><strong>Time:</strong> {hourData.time}</p>
      <p><strong>Temp:</strong> {hourData.temp_c}°C</p>
      <p><strong>Condition:</strong> {hourData.condition.text}</p>
    </div>
  ))}
</div>            </div>
          ))}
        </div>
      )}
            
            
          </div>
        </main>
      );
}
export default PageTwo