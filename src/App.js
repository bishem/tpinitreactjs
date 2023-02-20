import React from 'react';
import './App.css';
import { Footer, Header, Main } from './components';

const App = () => {
  return (
    <div className="app flex column justify-center fill-parent">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
