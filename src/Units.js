import React from "react";

import "./Units.css";

export default function Units() {
  return (
    <div class="units">
      <span class="C" id="celsius-link">
        °C
      </span>{" "}
      |
      <span class="F" id="fahrenheit-link">
        °F
      </span>
    </div>
  );
}
