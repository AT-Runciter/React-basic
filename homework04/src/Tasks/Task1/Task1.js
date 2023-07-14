import React, { useState } from 'react';

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  function generateRandomNumber() {
    const random = Math.floor(Math.random() * 101);
    setRandomNumber(random);
  }

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default RandomNumber;
