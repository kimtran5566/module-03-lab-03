import React, { useState } from 'react';

const SimpleRandomApp: React.FC = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(10);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleGenerateRandom = () => {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomValue);
  };

  return (
    <div>
      <h1>Simple Random App</h1>
      <div>
        <label>
          Min:
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Max:
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleGenerateRandom}>Generate Random Number</button>
      {randomNumber !== null && (
        <div>
          <h2>Random Number: {randomNumber}</h2>
        </div>
      )}
    </div>
  );
};

export default SimpleRandomApp;
