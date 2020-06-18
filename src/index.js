import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";
import "bootstrap/dist/css/bootstrap.css";

import "./style.css";

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
