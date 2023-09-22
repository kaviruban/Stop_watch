import {React, Component } from "react";
import "./funct_comp_timer.css";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time : 0,
      isStart : false,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startInterval() {
    if (this.state.isStart) {
      this.intervalId = setInterval(
        () => this.setState({ time: this.state.time + 1 }),
        10
      );
    }
  }

  startAndStop = () => {
    this.setState({ isStart: !this.state.isStart }, () => {
      if (!this.state.isStart) {
        clearInterval(this.intervalId);
      } else {
        this.startInterval();
      }
    });
  };

  reset = () => {
    this.setState({ time: 0, isStart: false }, () => {
      clearInterval(this.intervalId);
    });
  };

  render() {
    const { time, isStart } = this.state;

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    return (
      <div className="stopwatch-container">
        <p className="stopwatch-time">
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </p>
        <div className="stopwatch-buttons">
          <button className="stopwatch-button" onClick={this.startAndStop}>
            {isStart ? "Stop" : "Start"}
          </button>
          <button className="stopwatch-button" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
