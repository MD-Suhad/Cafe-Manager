import React from 'react';
import './Navbar';

const Navbar = () => {
  return (
    <div className="header">
      <div >
      <h1>Point of <span style={{color:"purple"}}>Sale</span></h1>
      </div>
      <div>
        POS
      </div>
      <div>
        <h3>Admin</h3>
        <h4>demo@demo.com</h4>
        <img src="" alt="" />
      </div>
    </div>
  );
};
export default Navbar;