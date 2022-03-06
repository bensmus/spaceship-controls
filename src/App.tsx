import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ClickablePanel } from './components/ClickablePanel';

function App() {
  return (
    <div className="App">
      <div className='flex-container'>
        <ClickablePanel name='External'/>
        <ClickablePanel name='Controls'/>
        <ClickablePanel name='Monitoring'/>
      </div>
    </div>
  );
}

export default App;
