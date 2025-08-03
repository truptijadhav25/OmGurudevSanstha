import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
            alt="Logo"
            className="logo-img me-2"
            style={{ height: '40px', width: '40px', borderRadius: '50%' }}
          />
          <span>Om Gurudev Sanstha</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" onClick={closeMenu} end>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about" onClick={closeMenu}>About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/focus-areas" onClick={closeMenu}>Focus Areas</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/projects" onClick={closeMenu}>Projects</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/impact" onClick={closeMenu}>Impact</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/team" onClick={closeMenu}>Team</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/partners" onClick={closeMenu}>Partners</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/testimonials" onClick={closeMenu}>Testimonials</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/help" onClick={closeMenu}>Help</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
