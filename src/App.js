// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';

// function App() {
//   return (
//     <div className="App">
//        <h1>
//         cafe manager code start consistency in real life
//         <h2>this is industrial project in the part of life</h2>
//         </h1>
//        <Navbar/>
      
//     </div>
//   );
// }

// export default App;
// App.js
import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar/Navbar';

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
      <ProductList/>
    </div>
  );
};

export default App;

