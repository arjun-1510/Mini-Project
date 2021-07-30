import React,{useEffect} from 'react';
import Image from './image/varshini.jpg';


import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {

  useEffect(() => {
    alanBtn({
        key: 'cd10647ec29c797158aacec471e1a3322e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand:( commandData) => {
          
          },
        
      })
    
  }, [])


  return (
    <div className="App">
      <h1>Hii varshini</h1>
      <img src={Image} alt={''} height="500px"/>
      
       
    </div>
    
  );
}

export default App;
