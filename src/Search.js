import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function displayTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }

  if (ready) {
    return (
      <form
        class="form-inline d-flex justify-content-center md-form form-sm"
        id="search-form"
      >
        <input
          class="form-control form-control-sm mr-3 w-75"
          type="text"
          placeholder="Where to?"
          aria-label="Search"
          id="search_bar"
        />
        <button type="submit" id="search_icon">
          <i class="fas fa-search"></i>
        </button>
      </form>
    );
  } else {
    const apiKey = "0e8411b87ebdb4c7a51d12f84927e60d";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);

    return "Loading...";
  }
}
