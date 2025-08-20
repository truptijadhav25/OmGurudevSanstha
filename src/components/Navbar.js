import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
=======
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
=======

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
            alt="Logo"
            className="logo-img me-2"
            style={{ height: '40px', width: '40px', borderRadius: '50%' }}
          />
<<<<<<< HEAD
          <span>{t('navbar.brand')}</span>
=======
          <span>OM GURUDEV SANSTHA</span>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
<<<<<<< HEAD
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu} end>
                {t('navbar.home')}
=======
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu} end>
                Home
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeMenu}>
<<<<<<< HEAD
                {t('navbar.about')}
=======
                About
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/focus-areas" onClick={closeMenu}>
<<<<<<< HEAD
                {t('navbar.focus')}
=======
                Focus Areas
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" onClick={closeMenu}>
<<<<<<< HEAD
                {t('navbar.projects')}
=======
                Projects
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/impact" onClick={closeMenu}>
<<<<<<< HEAD
                {t('navbar.impact')}
=======
                Impact
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team" onClick={closeMenu}>
<<<<<<< HEAD
                {t('navbar.team')}
=======
                Team
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/partners" onClick={closeMenu}>
<<<<<<< HEAD
                {t('navbar.partners')}
=======
                Partners
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonials" onClick={closeMenu}>
<<<<<<< HEAD
                {t('navbar.testimonials')}
=======
                Testimonials
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/help" onClick={closeMenu}>
<<<<<<< HEAD
                {t('navbar.help')}
              </NavLink>
            </li>

            {/* Language Switcher */}
            <li className="nav-item ms-lg-3">
              <select
                className="lang-switch form-select form-select-sm"
                value={i18n.language.startsWith('mr') ? 'mr' : 'en'}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                aria-label={t('navbar.language')}
              >
                <option value="en">EN</option>
                <option value="mr">मराठी</option>
              </select>
            </li>
=======
                Help
              </NavLink>
            </li>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
