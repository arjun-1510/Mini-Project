import React,{useEffect} from 'react';
import Image from './image/Honey.jpeg';


import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {

  useEffect(() => {
    alanBtn({
        key: '526ef1c6602bbbb655bcd56fb603b3bf2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand:( commandData) => {
          
          },
        
      })
    
  }, [])


  return (
    <div className="App">
      <h1>My Honey 💓</h1>
      <img src={Image} alt={''} height="500px"/>
      
       
    </div>
    
  );
}

export default App;
