import React from "react";

export default function CurrentTime(props) {
  let now = new Date();
  let hours = props.now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="CurrentTime">
      <h6 id="time">
        {hours}:${minutes}
      </h6>
    </div>
  );
}
