import { useSelector } from "react-redux"




function WeatherItem() {
    


const { weatherData, loading, error } = useSelector((state) => state.weather) || {};


if (loading) {
    return <p>Loading data...</p>
}


if (error){
    return <p>Error: {error} </p>;
}

if (!weatherData || weatherData.length === 0 ) return <div>No Weather Data available...</div> ;


const { location, current } = weatherData;


    return (
      <>






<div className="weather-item border p-4">
      <h2>{location.name}</h2>
      <div>
        {Object.entries(location).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {value.toString()}
          </p>
        ))}
      </div>
      <div>
        <h3>Current Conditions</h3>
        <p>
          <strong>Temperature:</strong> {current.temp_c}°C
        </p>
        <p>
          <strong>Condition:</strong> {current.condition.text}
        </p>
      </div>
    </div>










    {/* <div className="weather-item border p-4">
      <h2>{location.name}</h2>
      <div>
        {Object.entries(location).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {value.toString()}
          </p>
        ))}
      </div>
      <div>
        <h3>Current Conditions</h3>
        <p><strong>Temperature:</strong> {current.temp_c}°C</p>
        <p><strong>Condition:</strong> {current.condition.text}</p>
      </div>
    </div> */}





      </>
    );

  }
  export default WeatherItem
  