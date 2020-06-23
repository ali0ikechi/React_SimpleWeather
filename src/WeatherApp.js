import React from "react";
import CurrentTime from "./CurrentTime";
import Units from "./Units";
import Search from "./Search";
import City from "./City";
import Today from "./Today";
import CurrentWeather from "./CurrentWeather";
import Description from "./Description";

import "./Weatherapp.css";

export default function WeatherApp(props) {
  return (
    <div className="WeatherApp">
      <div className="container">
        <div className="weather_app_wrapper>">
          <div className="weather_app">
            <CurrentTime />
            <Units />
            <br />
            <br />
            <Search />
            <hr />
            <City />
            <Today />
            <CurrentWeather />
            <Description />
            <br />
            {/* <div className="Forecast_wrapper">
            <h3 id="hourly">Hourly</h3>
            <hr />
            <br />
            <div class="row weather-forecast" id="forecast">
              <div class="col-2">
                <h3>14:00</h3>
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  class="forecast_img"
                />
                <div class="weather-forecast-temp">
                  <strong>21</strong> 20
                </div>
              </div>
              <div class="col-2">
                <h3>14:00</h3>
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  class="forecast_img"
                />
                <div class="weather-forecast-temp">
                  <strong>21</strong> 20
                </div>
              </div>
              <div class="col-2">
                <h3>14:00</h3>
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  class="forecast_img"
                />
                <div class="weather-forecast-temp">
                  <strong>21</strong> 20
                </div>
              </div>
              <div class="col-2">
                <h3>14:00</h3>
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  class="forecast_img"
                />
                <div class="weather-forecast-temp">
                  <strong>21</strong> 20
                </div>
              </div>
              <div class="col-2">
                <h3>14:00</h3>
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  class="forecast_img"
                />
                <div class="weather-forecast-temp">
                  <strong>21</strong> 20
                </div>
              </div>
              <div class="col-2">
                <h3>14:00</h3>
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  class="forecast_img"
                />
                <div class="weather-forecast-temp">
                  <strong>21</strong> 20
                </div>
              </div>
            </div>
          </div> */}
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
