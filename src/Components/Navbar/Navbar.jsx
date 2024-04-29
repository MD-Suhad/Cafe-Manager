import React from 'react';
import './Navbar';

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <a href="#" className="navbar-link">Home</a>
      </li>
      <li className="navbar-item">
        <a href="#" className="navbar-link">Products</a>
      </li>
      <li className="navbar-item">
        <a href="#" className="navbar-link">Sales</a>
      </li>
      <li className="navbar-item">
        <a href="#" className="navbar-link">Reports</a>
      </li>
      <li className="navbar-item">
        <a href="#" className="navbar-link">Settings</a>
      </li>
    </ul>
  </nav>
  );
};
export default Navbar;