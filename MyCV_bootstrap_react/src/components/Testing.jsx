
function Testing() {
// eslint-disable-next-line no-undef  
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

export default Testing;