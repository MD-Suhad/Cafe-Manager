
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Example from './Components/Navigation/navigation';
import Login from './Components/Login/Login';

const App = () => {


  return (
    <div className="App">
     
      <Example/>
      <Navbar/>
      <Login/>
    
      
    </div>
  );
};

export default App;

