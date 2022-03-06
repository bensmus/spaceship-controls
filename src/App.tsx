import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex-container'>
        <div className='flex-item'><h2>External</h2><canvas></canvas></div>
        <div className='flex-item'><h2>Controls</h2><canvas></canvas></div>
        <div className='flex-item'><h2>Monitoring</h2><canvas></canvas></div>
      </div>
    </div>
  );
}

export default App;
