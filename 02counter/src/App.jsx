import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15;

  const addValue = () => {
    // counter = counter +1 ;
    if(counter >= 20){
      console.log("error")
    }
    else{
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if(counter <= 0){
      console.log("error")
    }
    else{
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Counter value {counter}</h1>

      <button onClick={addValue}>Add counter {counter}</button>
      <button onClick={removeValue}>Remove counter {counter}</button>
    </>
  )
}

export default App
