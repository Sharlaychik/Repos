import './App.css';
import React, { useState, useEffect } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import Display from './components/Display';
import Buttons from './components/Buttons';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);

  useEffect(() => {
    const unsubscribe = new Subject();
    interval(10)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (watchOn) {
          setTime((val) => val + 1);
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);

  const handleStart = () => {
    setWatchOn(true);
  };

  const handleStop = () => {
    if (time !== 0) {
        setWatchOn(false);
        setTime(0);
    }
  };

  const handleReset = () => {
    setTime(0);
    setWatchOn(false);
    if (time !== 0) {
      handleStart();
    }
  };

    const handleWait = () => {
        if (time !== 0) {
            setWatchOn(false);
            setTime(0);
            
        }
    };
            
  return (
    <div className="App ">
      <div className="main-section">
        <div className="holder position-absolute top-50 start-50 translate-middle">
          <div className="title">Stopwatch</div>
            <div className="timer">
            <Display time={time} />
            <Buttons
              start={handleStart}
              stop={handleStop}
              reset={handleReset}
              wait={handleWait}
              watchOn={watchOn}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;