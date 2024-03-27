import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="navbar-brand">
          <span className="navbar-item">Z.A Pharma</span>
          <p>
            Biswas Tower market, Kansat GopalNagar Mor
            Shibgong,Chapalnawabganj,Bangladesh
          </p>
        </div>
        <div className="navbar-right">
          <h3>Username :</h3>
          <h3>Designation :</h3>
          <h3>Department :</h3>
          <h4>Logged on at : Logged on at: web Mar 06,2024 01:15pm</h4>
        </div>
        <div className="navbar-bottom">
          <h3>
            This ERP is Developed and Maintained By Lumineux Informatique
            Bangladesh
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
