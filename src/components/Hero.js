import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

// Slogans with colors
const slogans = [
  "Empowering Communities",
  "Serving with Purpose",
  "Creating Impact",
  "Extending a Hand, Changing a Life",
  "Together for a Better Tomorrow"
];
const sloganColors = [
  "#ff6b6b", // red-pink
  "#1dd1a1", // green-teal
  "#54a0ff", // blue
  "#f368e0", // purple-pink
  "#feca57"  // yellow-orange
];

// Notification messages
const donationMessages = [
  "Donate today and make a difference! Every contribution counts.",
  "Your support brings hope and smiles to those in need.",
  "Together, we can create a brighter future for all."
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slogans.length);
    }, 4000); // slower for readability
    return () => clearInterval(timer);
  }, []);

  const handleDonate = () => {
    navigate('/help');
    window.scrollTo(0, 0);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">

        {/* NGO Logo with animation */}
        <div className="hero-logo-container">
          <img src="/Om logo.jpg" alt="Om Gurudev NGO Logo" className="hero-logo" />
        </div>


        <h1 className="hero-heading animate__animated animate__fadeInDown">
          Welcome to Om Gurudev NGO
        </h1>

        {/* Notification Banner */}
        <div className="notification-banner hero-banner">
          <div className="marquee">
            {donationMessages.map((msg, i) => (
              <div key={i} className="scrolling-text">
                {msg}
              </div>
            ))}
          </div>
        </div>

        {/* Animated Slogan */}
        <p
          key={currentIndex}
          className="hero-slogan fade-scale"
          style={{ color: sloganColors[currentIndex] }}
        >
          {slogans[currentIndex]}
        </p>

        <button
          className="hero-btn animate__animated animate__fadeInUp"
          onClick={handleDonate}
        >
          Donate
        </button>
      </div>
    </section>
  );
};

export default Hero;
