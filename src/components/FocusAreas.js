import React, { useEffect } from "react";
import "./FocusAreas.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const FocusAreas = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const areas = [
    {
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
              {t("focus.title")}
            </h2>
            <p className="focus-subtitle">
              {t("focus.subtitle")}
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
