import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview.js";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <h3>Hourly</h3>
        <hr />
        <div className="weather-forecast row">
          <ForecastPreview data={forecast.list[0]} />
          <ForecastPreview data={forecast.list[1]} />
          <ForecastPreview data={forecast.list[2]} />
          <ForecastPreview data={forecast.list[3]} />
          <ForecastPreview data={forecast.list[4]} />
          <ForecastPreview data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "0e8411b87ebdb4c7a51d12f84927e60d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
