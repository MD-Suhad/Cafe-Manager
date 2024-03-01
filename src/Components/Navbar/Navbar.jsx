import React from 'react';
import "./Navbar.css";

const Navbar = () => {
   return (
      <div>
         <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-item">POS System</span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a href="/" className="navbar-item">Home</a>
          <a href="/products" className="navbar-item">Products</a>
          <a href="/cart" className="navbar-item">Cart</a>
          <a href="/checkout" className="navbar-item">Checkout</a>
        </div>
      </div>
    </nav>
      </div>
   );
};

export default Navbar;