/**
* Amin MOHAMED
* Version 1.0
*/
import React, { Component } from 'react';
import '../css/Main.css';

class Main extends Component {
  render() {
    return (
      // need parent to be flex for this to work
      <main className='Main grow flex center'>
        <div> I AM !!!</div>
      </main>
    );
  }
}

export default Main;