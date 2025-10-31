import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { useTranslation } from "react-i18next";

// Slogans with colors
const slogans = [
  "hero.slogan1",
  "hero.slogan2",
  "hero.slogan3",
  "hero.slogan4",
  "hero.slogan5",
];

const sloganColors = [
  "#ff6b6b", // red-pink
  "#1dd1a1", // green-teal
  "#54a0ff", // blue
  "#f368e0", // purple-pink
  "#feca57", // yellow-orange
];

const Hero = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDonate = () => {
    navigate("/help");
    window.scrollTo(0, 0);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* NGO Logo */}
        <div className="hero-logo-container">
          <img
            src="/Om logo.jpg"
            alt={t("hero.logoAlt")}
            className="hero-logo"
          />
        </div>

        <h1 className="hero-heading animate__animated animate__fadeInDown">
          {t("hero.welcome")}
        </h1>

        {/* Notification Banner */}
        <div className="notification-banner hero-banner">
          <div className="marquee">
            {[t("hero.donationMsg1"), t("hero.donationMsg2"), t("hero.donationMsg3")].map(
              (msg, i) => (
                <div key={i} className="scrolling-text">
                  {msg}
                </div>
              )
            )}
          </div>
        </div>

        {/* Animated Slogan */}
        <p
          key={currentIndex}
          className="hero-slogan fade-scale"
          style={{ color: sloganColors[currentIndex] }}
        >
          {t(slogans[currentIndex])}
        </p>

        <button
          className="hero-btn animate__animated animate__fadeInUp"
          onClick={handleDonate}
        >
          {t("hero.donate")}
        </button>
      </div>
    </section>
  );
};

export default Hero;
