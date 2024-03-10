import React, { useState } from 'react';

function TransactionSite() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (itemName, itemPrice) => {
    const newItem = {
      name: itemName,
      price: itemPrice
    };
    setItems([...items, newItem]);
    setTotal(total + itemPrice);
  };

  const completeTransaction = () => {
    alert(`Transaction completed. Total: $${total.toFixed(2)}`);
    // You can implement further actions here such as sending the transaction data to a server
    // and clearing the cart.
    setItems([]);
    setTotal(0);
  };

  return (
    <div>
      <h1>Point of Sale Transaction</h1>
      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={completeTransaction}>Complete Transaction</button>
      </div>
      <div>
        <h2>Add Item</h2>
        <button onClick={() => addItem("Item 1", 10)}>Add Item 1 ($10)</button>
        <button onClick={() => addItem("Item 2", 20)}>Add Item 2 ($20)</button>
        {/* Add more buttons for different items as needed */}
      </div>
    </div>
  );
}

export default TransactionSite;
