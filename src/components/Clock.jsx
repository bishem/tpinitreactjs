/**
 * Amin MOHAMED
 * Version 1.0
 */
import React, { Component } from 'react';
import '../css/Clock.css';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.tick = setInterval(() => this.refresh(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }
  render() {
    return (
      <div className="Clock flex center">{this.state.time.toUTCString()}</div>
    );
  }

  refresh = () => {
    this.setState({ time: new Date() });
  };
}

export default Clock;
