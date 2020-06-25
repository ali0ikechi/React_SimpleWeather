import React from "react";
import CurrentTime from "./CurrentTime";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";

import "./Weatherapp.css";

export default function WeatherApp(props) {
  return (
    <div className="WeatherApp">
      <div className="container">
        <div className="weather_app_wrapper>">
          <div className="weather_app">
            <CurrentTime />
            <br />
            <br />
            <form
              className="form-inline d-flex justify-content-center md-form form-sm"
              id="search-form"
            >
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Where to?"
                aria-label="Search"
                id="search_bar"
              />
              <button type="submit" id="search_icon">
                <i className="fas fa-search"></i>
              </button>
            </form>
            <hr />
            <WeatherInfo />
            <br />
            <Forecast />
          </div>
          <small className="small">
            <a
              href="https://github.com/ali0ikechi/React_SimpleWeather"
              target="_blank"
            >
              Open Source Code{" "}
            </a>
            by Arisa
          </small>
        </div>
      </div>
    </div>
  );
}
