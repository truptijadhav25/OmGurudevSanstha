<<<<<<< HEAD
import React, { useEffect } from "react";
import "./FocusAreas.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const FocusAreas = () => {
  const { t } = useTranslation();

=======
import React, { useEffect } from 'react';
import './FocusAreas.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const FocusAreas = () => {
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const areas = [
    {
<<<<<<< HEAD
      icon: "bi bi-book",
      title: t("focus.education"),
      desc: t("focus.educationText"),
    },
    {
      icon: "bi bi-heart-pulse",
      title: t("focus.healthcare"),
      desc: t("focus.healthcareText"),
    },
    {
      icon: "bi bi-tools",
      title: t("focus.skills"),
      desc: t("focus.skillsText"),
    },
    {
      icon: "bi bi-tree-fill",
      title: t("focus.environment"),
      desc: t("focus.environmentText"),
    },
    {
      icon: "bi bi-people-fill",
      title: t("focus.women"),
      desc: t("focus.womenText"),
    },
    {
      icon: "bi bi-globe",
      title: t("focus.rural"),
      desc: t("focus.ruralText"),
    },
=======
      icon: 'bi bi-book',
      title: 'Education',
      desc: 'Promoting literacy and quality education through innovative programs in underserved communities.'
    },
    {
      icon: 'bi bi-heart-pulse',
      title: 'Healthcare',
      desc: 'Providing access to medical camps, health check-ups, and awareness programs for healthier lives.'
    },
    {
      icon: 'bi bi-tools',
      title: 'Skill Development',
      desc: 'Empowering youth and women with vocational training and skill enhancement workshops.'
    },
    {
      icon: 'bi bi-tree-fill',
      title: 'Environment',
      desc: 'Spreading environmental awareness and encouraging sustainable practices in rural regions.'
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Women & Child Welfare',
      desc: 'Improving lives of women and children by ensuring rights, safety, and growth opportunities.'
    },
    {
      icon: 'bi bi-globe',
      title: 'Rural Development',
      desc: 'Building self-reliant villages through agricultural support, water conservation, and infrastructure.'
    }
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
  ];

  return (
    <section className="focus-areas-section" id="focus-areas">
      <div className="container">
        {/* Image + Heading Flex Layout */}
        <div className="focus-header" data-aos="fade-right">
          <img
            src="/Focus.png"
            alt="Focus Logo"
            className="focus-logo-left"
            data-aos="zoom-in"
          />
          <div className="focus-heading-content">
            <h2 className="focus-title">
<<<<<<< HEAD
              {t("focus.title")}
            </h2>
            <p className="focus-subtitle">
              {t("focus.subtitle")}
=======
              Our <span className="highlight">Focus Areas</span>
            </h2>
            <p className="focus-subtitle">
              Driving impactful change through strategic initiatives
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="focus-area-grid">
          {areas.map((area, index) => (
            <div
              className="focus-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <i className={`focus-icon ${area.icon}`}></i>
              <h4>{area.title}</h4>
              <p>{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
