import ReactDOM from 'react-dom';
import React from 'react';

//import './index.css';
import MyCV from './MyCV';
import Testing from './components/Testing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyCV />
    <Testing />
  </React.StrictMode>
);


/*
ReactDOM.render(
  <div>
  <Testing />
  <MyCV />
  </div>,
  document.getElementById('root')
);
 */