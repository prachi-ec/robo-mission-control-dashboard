import React from 'react';
import './MissionButton.css';

const MissionButtons = () => {
  const handleButtonClick = async (mission_name) => {
    try {
      const response = await fetch(`http://localhost:8000/add_mission/?mission_name=${mission_name}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('POST request successful: ', mission_name);
    } catch (error) {
      console.error('Error during POST request:',mission_name, error);
    }
  };

  return (
    <div className="mission-buttons-container">
      <button className='mission-button' onClick={() => handleButtonClick('mission1')}>Mission 1</button>
      <button className='mission-button' onClick={() => handleButtonClick('mission2')}>Mission 2</button>
      <button className='mission-button' onClick={() => handleButtonClick('mission3')}>Mission 3</button>
    </div>
  );
};

export default MissionButtons;