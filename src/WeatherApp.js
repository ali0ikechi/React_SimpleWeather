import React, { useState } from "react";
import CurrentTime from "./CurrentTime";
import Units from "./Units";
import Search from "./Search";
import City from "./City";
import Today from "./Today";
import CurrentWeather from "./CurrentWeather";
import Description from "./Description";

export default function WeatherApp(props)  {
  const [weatherData, setWeatherData] = useState({ready: false});

function 

    return (
      <div className="Weatherapp">
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
