import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 FoodExpress. All rights reserved.</p>
        <p>Contact: support@foodexpress.com | +91-9351662415</p>
        <div className="social-icons">
          <a href="#">Facebook</a> | 
          <a href="https://www.instagram.com/shubham_maratha9990/?igsh=NWx3eHl5bHI3M3Uw#">Instagram</a> | 
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
