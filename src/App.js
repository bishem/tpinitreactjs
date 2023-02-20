/**
* Amin MOHAMED
* Version 1.0
*/
import React from 'react';
import { Footer, Header, Main } from './components';
import './css/App.css';

const App = () => {
  return (
    <div className="App flex column justify-center fill-parent">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
