import React, { useState } from 'react';
import './SpinningWheel.css';

const categories = ['1', '2', '3', '4', '5'];
const spinDuration = 5; // Spin duration in seconds

function SpinningWheel() {
  const [rotation, setRotation] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  const spinWheel = () => {
    const newRotation = Math.floor(Math.random() * 360 + spinDuration * 360);
    setRotation(newRotation);
    const selectedIndex = Math.floor((newRotation % 360) / (360 / categories.length));
    setSelectedCategory(categories[selectedIndex]);
  };

  return (
    <div className="wheel-container">
      <div
        className="wheel"
        style={{ transform: `rotate(${rotation}deg)`, transition: `transform ${spinDuration}s ease-out` }}
      >
        {categories.map((category, index) => (
          <div key={index} className="wheel-section" style={{ '--index': index }} data-text={category}>
          </div>
        ))}
      </div>
      <button onClick={spinWheel}>Spin</button>
      {selectedCategory && <div className="selected-category">Selected Category: {selectedCategory}</div>}
    </div>
  );
}

export default SpinningWheel;