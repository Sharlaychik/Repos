import React, {useState, useEffect} from 'react';


function Testing() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter >= 1 ) {
      alert("its working" + counter)
    }
  }, [counter]);

  function increment(){
    setCounter(counter + 1);
  }

  return <div>
    <p>{counter}</p>
    <button onClick={increment}>increment</button>
  </div>
}

export default Testing;