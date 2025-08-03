import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading animate__animated animate__fadeInDown">
          Welcome to Om Gurudev NGO
        </h1>
        <p className="hero-subtext animate__animated animate__fadeInUp">
          Empowering Communities | Serving with Purpose | Creating Impact
        </p>
        <button className="hero-btn animate__animated animate__fadeInUp">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
