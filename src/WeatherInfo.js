import React from "react";
import City from "./City";
import Today from "./Today";
import CurrentWeather from "./CurrentWeather";
import Description from "./Description";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <City />
      <Today />
      <CurrentWeather />
      <Description />
    </div>
  );
}
