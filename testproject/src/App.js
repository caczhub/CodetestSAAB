
import './App.css';
import Buttons from './Buttons.js';
import React, {useState} from 'react'; //nödvändig för att kunna uppdatera state

function App() {

  const [toggle, setToggle] = useState(true); //en boolean som blir true eller false
  const [count, setCounter] = useState(0); //en number som ökar

  //Funktioner vi slänger ned som props i barnen härifrån för att ge knapparna deras funktion
  const toggleFunc =()=>{
    setToggle(!toggle);
  }
  const counterFunc =()=>{
    setCounter(count + 1);
  }

  return (
    <div className="App">
      <Buttons toggler={toggleFunc} counter={counterFunc}/> 
    </div>
  );
}

export default App;
