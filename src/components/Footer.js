// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Om Gurudev Bahuudeshiya Sevabhavi Sanstha</h4>
            <p>Empowering Lives, Uplifting Communities</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
               <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/projects">Our Projects</a></li>
              <li><a href="/help">Get Involved</a></li>
              <li><a href="/team">Our Team</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Office Address, Aurangabad, Maharashtra</p>
            <p>Phone: +91-XXXX-XXXXXX</p>
            <p>Email: info@omgurudev.org</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Om Gurudev Bahuudeshiya Sevabhavi Sanstha Aurangabad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
