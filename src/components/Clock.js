/**
 * Amin MOHAMED
 * Version 1.0
 */
import { Component } from 'react';
import '../styles/Clock.css';

/**
 * component to display the current time
 *
 */
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
      <div className="clock flex center">{this.state.time.toUTCString()}</div>
    );
  }

  refresh = () => {
    this.setState({ time: new Date() });
  };
}

export default Clock;
