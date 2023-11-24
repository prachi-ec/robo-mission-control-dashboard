// src/App.js
import React from 'react';
import ImageUploader3 from './attempt3';
import MissionButtons from './missionButton';
function App() {
  return (
    <div className="App">
      <h1>Robot Dashboard</h1>
      {/* <Robomap /> */}
      <ImageUploader3/>
      {/* <ImageTest imagePath={floorMapImg}/> */}
      <MissionButtons/>
    </div>
  );
}

export default App;