
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Example from './Components/Navigation/navigation';

const App = () => {


  return (
    <div className="App">
      {/* <Home/> */}
      <Example/>
      <Navbar/>
    
      
    </div>
  );
};

export default App;

