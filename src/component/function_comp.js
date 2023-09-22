import React, { useState, useEffect } from "react";
import "./funct_comp_timer.css";
const Stopwatch = () => {
  // state to store time
  const [time, SetTime] = useState(0);

  // state to check stopwatch running or not
  const [isStart, SetIsStart] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isStart) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => SetTime(time + 1), 10);
    }
    console.log("interval :" , intervalId);
    return () => clearInterval(intervalId);
  }, [isStart, time]);


  console.log("time : " , time);
  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    SetIsStart(!isStart);
  };

  // Method to reset timer back to 0
  const reset = () => {
    SetTime(0);
  };
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours.toString().padStart(2 , "0")}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={startAndStop}>
          {isStart ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;