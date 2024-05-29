
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebarr';
import Login from './Components/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";


const App = () => {


  return (
    <div  className="App">

  
      <Navbar/>
      <Home/>
      <Sidebar/>
      <Link to = {Login} >{Login}</Link>


      
    
      
    </div>
  );
};

export default App;

