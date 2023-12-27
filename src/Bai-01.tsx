import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div>
      <div>
        <input type="text" value={input} readOnly />
      </div>
      <div>
        {[7, 8, 9, '/'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value.toString())}>
            {value}
          </button>
        ))}
      </div>
      <div>
        {[4, 5, 6, '*'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value.toString())}>
            {value}
          </button>
        ))}
      </div>
      <div>
        {[1, 2, 3, '-'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value.toString())}>
            {value}
          </button>
        ))}
      </div>
      <div>
        {[0, '.', '=', '+'].map((value) => (
          <button key={value} onClick={() => (value === '=' ? handleCalculate() : handleButtonClick(value.toString()))}>
            {value}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={handleClear}>C</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
