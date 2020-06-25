import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="units">
        <span className="C" id="celsius-link">
          °C
        </span>{" "}
        |
        <span className="F" id="fahrenheit-link">
          °F
        </span>
      </div>
      <h1>
        <span id="temperature">21</span>°
      </h1>
    </div>
  );
}
