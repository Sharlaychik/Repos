import React from 'react';

function Display({ time }) {
  return (
    <div>
      <span>{('0' + Math.floor((time / 360000) % 60)).slice(-2)}</span>&nbsp;:&nbsp;
      <span>{('0' + Math.floor((time / 6000) % 60)).slice(-2)}</span>&nbsp;:&nbsp;
      <span>{('0' + Math.floor((time / 100) % 60)).slice(-2)}</span>
    </div>
  );
}

export default Display;