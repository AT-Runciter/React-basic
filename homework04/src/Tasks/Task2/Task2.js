import React, { useState } from 'react';

function ColorfulText() {
  const [textColor, setTextColor] = useState('black');

  function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const purple = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${purple})`;
    setTextColor(color);
  }

  return (
    <div>
      <button onClick={generateRandomColor}>Change Text Color</button>
      <p style={{ color: textColor }}>Sample Text</p>
    </div>
  );
}

export default ColorfulText;
