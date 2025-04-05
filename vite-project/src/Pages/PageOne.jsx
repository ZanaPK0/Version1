import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultipleCities } from "../Reducers/weatherCitiesSlice";

const PageOne = () => {
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
      <div>
        <h1>Weather for 3 Cities</h1>
        {citiesWeatherData.map((cityWeather, index) => (
          <div key={index}>
            <h2>
              {cityWeather.location.name}, {cityWeather.location.country}
            </h2>
            <p>Temperature: {cityWeather.current.temp_c} °C</p>
            <p>Condition: {cityWeather.current.condition.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PageOne;
