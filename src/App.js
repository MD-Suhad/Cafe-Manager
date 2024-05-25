
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebarr';
import Login from './Components/Login/Login';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <p>Welcome to the dashboard!</p>
  </div>
);

const App = () => {


  return (
    <div  className="App">

  
      <Navbar/>
      <Home/>
      <Sidebar/>
     

      
    
      
    </div>
  );
};

export default App;

