import React from "react";

const HourlyForecast = ({ forecastday }) => {
  return (
    <section className="flex flex-row overflow-hidden overflow-x-scroll space-x-4">
      {forecastday.hour.slice(0, 24).map((hourData, index) => (
        <article
          key={index}
          className="bg-gray-100 p-3 rounded-lg shadow-sm flex-shrink-0 w-2/2 sm:w-1/2 md:w-1/3"
        >
          <p>
            <strong>Time:</strong> {hourData.time}
          </p>
          <p>
            <strong>Temp:</strong> {hourData.temp_c}°C
          </p>
          <p>
            <strong>Condition:</strong> {hourData.condition.text}
          </p>
        </article>
      ))}
    </section>
  );
};

export default HourlyForecast;
