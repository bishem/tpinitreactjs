/**
 * Amin MOHAMED
 * Version 1.0
 */
import React, { Component } from 'react';
import { PEOPLE } from '../classes';
import Gallery from './Gallery';

class Main extends Component {
  render() {
    return (
      // need parent to be flex for this to work
      <main className="Main grow flex center">
        <Gallery list={PEOPLE} />
      </main>
    );
  }
}

export default Main;
