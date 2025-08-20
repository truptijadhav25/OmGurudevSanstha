import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
          <span>OM GURUDEV SANSTHA</span>
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
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu} end>
                {t('navbar.home')}
              </NavLink>
            </li>
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
            <li className="nav-item">
              <NavLink className="nav-link" to="/impact" onClick={closeMenu}>
                {t('navbar.impact')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team" onClick={closeMenu}>
                {t('navbar.team')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/partners" onClick={closeMenu}>
                {t('navbar.partners')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonials" onClick={closeMenu}>
                {t('navbar.testimonials')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/help" onClick={closeMenu}>
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
