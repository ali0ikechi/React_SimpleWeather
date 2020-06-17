import React from "react";

export default function Description() {
  return (
    <div className="Description">
      <div class="row descriptions">
        <div class="col-6">
          <h3 id="description">It is fucking raining</h3>
        </div>
        <div class="col-6">
          <h3 id="max_min">16° — 22°</h3>
        </div>
      </div>
      <br />
      <div class="row details" id="detail">
        <div class="col-6" id="wind">
          <h4>
            <strong>Wind:</strong> 14 km/h
          </h4>
        </div>
        <div class="col-6" id="humidity">
          <h4>
            <strong>Humidity:</strong> 30%
          </h4>
        </div>
      </div>
    </div>
  );
}
