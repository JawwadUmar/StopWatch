import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalId = useRef(null);

  

  function handleStart(){

    clearInterval(intervalId.current);

    setStartTime(Date.now());

    intervalId.current = setInterval(() => {
      setNow(Date.now());
    }, 10);

  }

  function handleStop(){
    clearInterval(intervalId.current);
  }

  function handleReset(){
    clearInterval(intervalId.current);
    setNow(null);
    setStartTime(null);
  }

  let timeLapsed = 0;

  if(startTime != null && now!= null){
    timeLapsed = (now - startTime)/1000;
  }

  return (
    <>
    <h1>Stopwatch</h1>
    <div className='centered-div'>
    <div className='timeLapsed'>{timeLapsed.toFixed(3)}</div>

      <div className='button-container'>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      </div>
      
    </div> 
    </>
  );
}

export default App;
