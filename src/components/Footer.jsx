/**
 * Amin MOHAMED
 * Version 1.0
 */
import React, { Component } from 'react';
import { Clock } from '.';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer flex">
        <Clock />
      </footer>
    );
  }
}

export default Footer;
