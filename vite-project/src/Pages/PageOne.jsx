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
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-sky-800">Weather in different parts of Sweden</h1>

        {loading && <p className="text-blue-500">Loading cities...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {citiesWeatherData && citiesWeatherData.length > 0 ? (
            citiesWeatherData.map((weather, index) => (
              <WeatherItem key={index} weather={weather} />

            ))
          ) : (
            !loading && <p className="text-gray-500">No weather data available...</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default PageOne;