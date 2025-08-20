<<<<<<< HEAD
import React, { useEffect } from "react";
import "./About.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

=======
import React, { useEffect } from 'react';
import './About.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="container py-5">
        <h2 className="section-title text-center" data-aos="fade-down">
<<<<<<< HEAD
          {t("about.title")}
        </h2>
        <p className="section-subtitle text-center mb-5" data-aos="fade-up">
          {t("about.subtitle")}
=======
          About <span className="highlight">Om Gurudev NGO</span>
        </h2>
        <p className="section-subtitle text-center mb-5" data-aos="fade-up">
          Empowering Lives. Uplifting Communities.
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
        </p>

        {/* Image and Text Row */}
        <div className="row about-content align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src={`${process.env.PUBLIC_URL}/About.png`}
<<<<<<< HEAD
              alt={t("about.title")}
=======
              alt="About Om Gurudev NGO"
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              className="img-fluid rounded shadow about-img"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center" data-aos="fade-left">
            <div className="about-text-box p-4">
<<<<<<< HEAD
              <h4>{t("about.whoWeAre")}</h4>
              <p>{t("about.content1")}</p>
              <p>{t("about.content2")}</p>
              <a href="#contact" className="btn btn-primary mt-3">
                {t("about.joinUs")}
              </a>
=======
              <h4>Who We Are</h4>
              <p>
                <strong>Om Gurudev Bahuudeshiya Sevabhavi Sanstha Aurangabad</strong> is a committed NGO working to uplift underprivileged communities through impactful social welfare activities. We work across various sectors including education, healthcare, skill development, and rural empowerment.
              </p>
              <p>
                We believe in inclusive growth and long-term sustainable development by empowering individuals and fostering community engagement. Our initiatives reach remote areas to ensure no one is left behind.
              </p>
              <a href="#contact" className="btn btn-primary mt-3">Join Us</a>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="row mt-5">
          <div className="col-md-4" data-aos="fade-up">
            <div className="info-box shadow-sm">
              <i className="bi bi-lightbulb-fill icon"></i>
<<<<<<< HEAD
              <h5>{t("about.vision")}</h5>
              <p>{t("about.visionText")}</p>
=======
              <h5>Vision</h5>
              <p>Empowering lives through sustainable social development and inclusive growth.</p>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="info-box shadow-sm">
              <i className="bi bi-bullseye icon"></i>
<<<<<<< HEAD
              <h5>{t("about.mission")}</h5>
              <ul>
                {t("about.missionPoints", { returnObjects: true }).map(
                  (point, index) => (
                    <li key={index}>{point}</li>
                  )
                )}
=======
              <h5>Mission</h5>
              <ul>
                <li>Ensure quality education and literacy</li>
                <li>Promote health and hygiene awareness</li>
                <li>Empower women and youth with skills</li>
                <li>Support rural and farmer livelihoods</li>
                <li>Foster sustainable communities</li>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </ul>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="info-box shadow-sm">
              <i className="bi bi-heart-fill icon"></i>
<<<<<<< HEAD
              <h5>{t("about.values")}</h5>
              <p>{t("about.valuesText")}</p>
=======
              <h5>Values</h5>
              <p>Integrity, Equality, Compassion, Community, Sustainability</p>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
