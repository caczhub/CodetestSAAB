
import './App.css';
import Buttons from './Buttons.js';
import React, {useState} from 'react'; //nödvändig för att kunna uppdatera state

function App() {

  const [toggle, setToggle] = useState(true); //en boolean som blir true eller false
  const [counter, setCounter] = useState(0); //en number som ökar

  //Funktioner vi slänger ned som props i barnen härifrån för att ge knapparna deras funktion
  const toggleFunc =()=>{
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <Buttons toggle={toggleFunc}/> 
    </div>
  );
}

export default App;
