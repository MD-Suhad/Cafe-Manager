
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Calender from './Components/Calender/Calender';

const App = () => {


  return (
    <div className="App">
      {/* <Home/> */}
      <Navbar/>
      <Calender/>
      
    </div>
  );
};

export default App;

