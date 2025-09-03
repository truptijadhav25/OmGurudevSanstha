import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="row footer-row">
          {/* About NGO */}
          <div className="col-md-4 footer-about">
            <div className="footer-logo-container">
              <img src="/Om logo.jpg" alt="NGO Logo" className="footer-logo-img" />
              <h3 className="footer-logo-text">Om Gurudev NGO</h3>
            </div>
            <p>
              Empowering lives and uplifting communities through education, 
              healthcare, and social initiatives. Together, we can make 
              a difference.
            </p>
          </div>

          {/* Quick Links - CENTERED */}
          <div className="col-md-4 footer-links center-links">
            <h5>Quick Links</h5>
            <ul>
               <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeMenu}>
                {t('navbar.about')}
              </NavLink>
            </li>
               <li className="nav-item">
              <NavLink className="nav-link" to="/focus-areas" onClick={closeMenu}>
                {t('navbar.focus')}
              </NavLink>
            </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/projects" onClick={closeMenu}>
                {t('navbar.projects')}
              </NavLink>
            </li>
              // <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 footer-social">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Om Gurudev Bahuudeshiya Sevabhavi Sanstha Aurangabad | 
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
