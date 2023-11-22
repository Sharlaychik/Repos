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

TRN_215/75_R17,5_M788_ALL_BS
TRN_235/75_R17,5_M729_D_BS
TRN_265/70_R17,5_M729_D_BS
TRN_285/70_R19,5_M729_D_BS


export default Testing;