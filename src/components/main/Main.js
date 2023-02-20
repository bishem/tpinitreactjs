import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      // need parent to be flex for this to work
      <main className='grow flex center'>
        <div> I AM !!!</div>
      </main>
    );
  }
}

export default Main;