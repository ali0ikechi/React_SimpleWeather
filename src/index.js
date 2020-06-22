import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import WeatherApp from "./WeatherApp";

import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
