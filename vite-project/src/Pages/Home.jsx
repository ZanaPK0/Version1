import React,  { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchInput from "../Components/WeatherSearch/SearchInput"
import WeatherItem from "../Components/WeatherSearch/WeatherItem"
import { fetchCurrentLocationWeather } from "../Reducers/weatherSearchSlice";

import { useDispatch } from "react-redux";

function Home(){
    // const { weatherData, loading, error } = useSelector((state) => state.weather);
    const dispatch = useDispatch();


    const { currentLocationWeather, loading, error } = useSelector(
      (state) => state.weather ?? {}
    );
  



    

    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
        <div className="max-w-3xl mx-auto bg-cyan-50 rounded-2xl shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Home</h2>
          <p className="mb-6 text-gray-600">Search for the weather in your city below:</p>
  
          <SearchInput onSearch={(query) => dispatch(fetchCurrentLocationWeather(query))} />
  
          <div className="mt-6">
            {loading && <p className="text-blue-500">Loading weather data...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {currentLocationWeather ? (
              <WeatherItem weather={currentLocationWeather} />
            ) : (
              !loading && <p className="text-gray-500">No weather data available.</p>
            )}
          </div>
        </div>
      </main>
    );
}
export default Home