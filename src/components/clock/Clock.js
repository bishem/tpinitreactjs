import React from "react";
import './Clock.css';

let TIME = new Date();

const Clock = () => {
  return (
    <div className="clock flex center">{TIME.toUTCString()}</div>
  );
}


export default Clock;