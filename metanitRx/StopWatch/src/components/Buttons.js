import React from 'react';

function Buttons({ start, stop, reset, wait, watchOn }) {
  return (
    <div>
      <button
        className={watchOn ? 'display' : 'btn btn-outline-success btn-lg  mybtn'}
        onClick={start}>
        Start
      </button>
      <button
        className={watchOn ? 'btn btn-outline-danger btn-lg  mybtn' : 'display'}
        onClick={stop}>
        Stop
      </button>
      <button className="btn btn-outline-info mybtn btn-lg" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-outline-info mybtn btn-lg" onClick={wait}>
        Clear
      </button>
    </div>
  );
}

export default Buttons;