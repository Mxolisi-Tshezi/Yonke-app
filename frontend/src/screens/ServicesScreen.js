import React from 'react';
import HelloWorldImage from './comingSoon.jpg';
import '../css/ServicesScreen.css';

function ServicesScreen() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello, World!</h1> */}
        <img src={HelloWorldImage} alt="Hello, World!" />

      </header>
    </div>
  );
}

export default ServicesScreen;
