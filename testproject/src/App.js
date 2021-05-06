
import './App.css';
import Buttons from './Buttons.js';
import React, {useEffect, useState} from 'react'; //nödvändig för att kunna uppdatera state
import Display from './Display';

function App() {

  const saabBil = "https://okfl-static-files.s3.eu-north-1.amazonaws.com/klassiker/public/styles/main_image_full/public/images/2015/06/saab900turbo-1.jpg?itok=BAI6u-Fe"
  const [toggle, setToggle] = useState(true); //en boolean som blir true eller false
  const [count, setCounter] = useState(0); //en number som ökar
  const [endpointResponse, setEndpointResponse] = useState("");

  //Funktioner vi slänger ned som props i barnen härifrån för att ge knapparna deras funktion
  const toggleFunc =()=>{
    setToggle(!toggle);
  }
  const counterFunc =()=>{
    setCounter(count + 1);
  }
  const accessEndpoint = async() =>{
    await fetch("http://localhost:9000/basicEndpoint")
      .then(result => result.text())
      .then(result => setEndpointResponse(result))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    accessEndpoint()
  }, [])

  return (
    <div className="App">
      <h1>{endpointResponse}</h1>
      <Buttons toggler={toggleFunc} counter={counterFunc}/> 
      <Display displayImg={toggle} imgSrc={saabBil} number={count}/>
    </div>
  );
}

export default App;
