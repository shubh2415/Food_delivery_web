import React from 'react';
import './Navbar.css'; // CSS file (optional)
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FoodExpress</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Cart 🛒</Link></li>
        <li><Link to="/cart">About</Link></li>
        <li><Link to="/about">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
