import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import MyCV from './MyCV';
import Testing from './components/Testing';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Testing />
    <MyCV />
  </React.StrictMode>
);
*/

ReactDOM.render(
  <div>
  <Testing />
  <MyCV />
  </div>,
  document.getElementById('root')
);
  

/*
function Testing() {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    alert("its working" + counter)
  });

  function increment(){
    setCounter(counter + 1);
  }

  return <div>
    <p>{counter}</p>
    <button onClick={increment}>increment</button>
  </div>
}
*/