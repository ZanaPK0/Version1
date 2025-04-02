import React,  {  } from "react";
import { useSelector } from "react-redux";
import SearchInput from "../Components/WeatherSearch/SearchInput"
import WeatherItem from "../Components/WeatherSearch/WeatherItem"



function Home(){
    const { weatherData, loading, error } = useSelector((state) => state.weather);


    return (
        <main className="h-5/6">
        <h2>Home</h2>
        <SearchInput />
        {loading && <div>Loading weather data...</div>}
        {error && <div>Error: {error}</div>}
        {weatherData ? (
        <WeatherItem data={weatherData} />
      ) : (
        !loading && <div>No weather data available.</div>
      )}

        <h3>H3 TEST</h3>
        </main>
    )
}
export default Home