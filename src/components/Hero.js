import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Hero.css';

const slogans = [
  "Empowering Communities",
  "Serving with Purpose",
  "Creating Impact"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // hook for navigation

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleLearnMore = () => {
    navigate('/about'); // redirects to About page
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading animate__animated animate__fadeInDown">
          Welcome to Om Gurudev NGO
        </h1>

        {/* Notification banner INSIDE hero */}
        <div className="notification-banner hero-banner">
          <div className="scrolling-text">
            Donate today and make a difference! Every contribution counts.
          </div>
        </div>

        <p key={currentIndex} className="hero-subtext animate__animated animate__fadeInUp hero-slogan">
          {slogans[currentIndex]}
        </p>

        <button 
          className="hero-btn animate__animated animate__fadeInUp"
          onClick={handleLearnMore}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
