import React, { useEffect } from "react";
import "./About.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="container py-5">
        <h2 className="section-title text-center" data-aos="fade-down">
          {t("about.title")}
        </h2>
        <p className="section-subtitle text-center mb-5" data-aos="fade-up">
          {t("about.subtitle")}
        </p>

        {/* Image and Text Row */}
        <div className="row about-content align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src={`${process.env.PUBLIC_URL}/About.png`}
              alt={t("about.title")}
              className="img-fluid rounded shadow about-img"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center" data-aos="fade-left">
            <div className="about-text-box p-4">
              <h4>{t("about.whoWeAre")}</h4>
              <p>{t("about.content1")}</p>
              <p>{t("about.content2")}</p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("about.joinUs")}
              </button>
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="row mt-5">
          <div className="col-md-4" data-aos="fade-up">
            <div className="info-box shadow-sm">
              <i className="bi bi-lightbulb-fill icon"></i>
              <h5>{t("about.vision")}</h5>
              <p>{t("about.visionText")}</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="info-box shadow-sm">
              <i className="bi bi-bullseye icon"></i>
              <h5>{t("about.mission")}</h5>
              <ul>
                {t("about.missionPoints", { returnObjects: true }).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="info-box shadow-sm">
              <i className="bi bi-heart-fill icon"></i>
              <h5>{t("about.values")}</h5>
              <p>{t("about.valuesText")}</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="certificates-section mt-5">
          <h3 className="text-center mb-4" data-aos="fade-down">
            {t("about.certificationsTitle", "Our Certification")}
          </h3>
          <div className="row justify-content-center">
            <div className="col-md-8" data-aos="zoom-in">
              <div className="certificate-card shadow-lg p-4 rounded text-center">
                <img
                  src={`${process.env.PUBLIC_URL}/certificate.png`}
                  alt="NGO Certificate"
                  className="img-fluid certificate-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
