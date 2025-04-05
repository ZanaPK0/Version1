import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultipleCities } from "../Reducers/weatherCitiesSlice";
import WeatherItem from "../Components/WeatherSearch/WeatherItem";

function PageOne() {
  const dispatch = useDispatch();
  const { citiesWeatherData, loading, error } = useSelector(
    (state) => state.weatherCities
  );

  useEffect(() => {
    dispatch(fetchMultipleCities());
  }, [dispatch]);

  if (loading) return <p>Loading cities...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <h1>Weather for 3 Cities</h1>
      {citiesWeatherData && citiesWeatherData.length > 0 ? (
        citiesWeatherData.map((weather, index) => (
          <WeatherItem key={index} weather={weather} />
        ))
      ) : (
        <p>No city data available.</p>
      )}
    </main>
  );
}

export default PageOne;