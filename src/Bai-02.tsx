import React, { useState, useEffect } from 'react';
import './Bai-02.css';

const CountdownTimer: React.FC = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(300); // 5 minutes
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  const startTimer = () => {
    clearInterval(timerInterval as number);
    const intervalId = setInterval(tick, 1000);
    setTimerInterval(intervalId);
  };

  const resetTimer = () => {
    clearInterval(timerInterval as number);
    setTimeInSeconds(300);
  };

  const tick = () => {
    if (timeInSeconds > 0) {
      setTimeInSeconds(prevTime => prevTime - 1);
    } else {
      clearInterval(timerInterval as number);
      alert('Hết giờ!');
    }
  };

  const updateTimerDisplay = () => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  };

  const padNumber = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  useEffect(() => {
    document.title = updateTimerDisplay();
  }, [timeInSeconds]);

  return (
    <div className="CountdownTimer">
      <div className="timer-container">
        <div id="timer">{updateTimerDisplay()}</div>
        <div className="buttons">
          <button onClick={startTimer}>Start</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
