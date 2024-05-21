
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
     

      <Navbar/>
      <Home/>
      <Sidebar/>
    
      
    </div>
  );
};

export default App;

