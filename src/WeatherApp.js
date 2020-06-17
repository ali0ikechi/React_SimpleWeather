import React from "react";
import CurrentTime from "./CurrentTime";
import Units from "./Units";
import Search from "./Search";
import City from "./City";
import Today from "./Today";
import CurrentWeather from "./CurrentWeather";
import Description from "./Description";

export default class WeatherApp extends React.Component {
  render = () => {
    return (
      <div className="App">
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
      </div>
    );
  };
}
