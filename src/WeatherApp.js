import React, { useState } from "react";
import CurrentTime from "./CurrentTime";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weatherapp.css";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "0e8411b87ebdb4c7a51d12f84927e60d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="container">
          <div className="weather_app_wrapper>">
            <div className="weather_app">
              <CurrentTime />
              <br />
              <form
                onSubmit={handleSubmit}
                className="form-inline d-flex justify-content-center md-form form-sm"
                id="search-form"
              >
                <input
                  className="form-control form-control-sm mr-3 w-75"
                  type="text"
                  placeholder="Where to?"
                  aria-label="Search"
                  id="search_bar"
                  onChange={handleCityChange}
                />
                <button type="submit" id="search_icon">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <hr />
              <WeatherInfo data={weatherData} />
              <br />
              <Forecast city={weatherData.city} />
            </div>
            <small className="small">
              <a
                href="https://github.com/ali0ikechi/React_SimpleWeather"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Source Code{" "}
              </a>
              by Arisa
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
