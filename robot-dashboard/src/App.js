// src/App.js
import React from 'react';
import RoboMap from './roboMap';
import MissionButtons from './missionButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Robot Dashboard</h1>
      <RoboMap/>
      <br/>
      <br/>
      <MissionButtons/>
    </div>
  );
}

export default App;