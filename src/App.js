
import React, { useState } from 'react';
import ProductList from './Components/Navbar/ProductList';
import Cart from './Components/Navbar/Cart';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <h1>Point of Sale System</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Navbar/>
      <Home/>
      <ProductList/>
      <div>
      <h1>Welcome to Our Point of Sale System</h1>
      <p>This is a simple Point of Sale system built with React.js.</p>
      <p>Features:</p>
      <ul>
        <li>Add items to cart</li>
        <li>View total</li>
        <li>Complete transactions</li>
      </ul>
      <p>Get started by navigating to the transaction page.</p>
      <a href="/transaction">Go to Transaction Page</a>
    </div>
    </div>
  );
};

export default App;

