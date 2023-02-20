/**
* Amin MOHAMED
* Version 1.0
*/
import React from "react";
import '../css/Clock.css';

let TIME = new Date();

const Clock = () => {
  return (
    <div className="Clock flex center">{TIME.toUTCString()}</div>
  );
}


export default Clock;