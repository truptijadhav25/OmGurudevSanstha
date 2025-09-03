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
          {t ? t("about.title") : "About Om Gurudev NGO"}
        </h2>
        <p className="section-subtitle text-center mb-5" data-aos="fade-up">
          {t ? t("about.subtitle") : "Empowering Lives. Uplifting Communities."}
        </p>

        {/* Image and Text Row */}
        <div className="row about-content align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src={`${process.env.PUBLIC_URL}/About.png`}
              alt={t ? t("about.title") : "About Om Gurudev NGO"}
              className="img-fluid rounded shadow about-img"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center" data-aos="fade-left">
            <div className="about-text-box p-4">
              <h4>{t ? t("about.whoWeAre") : "Who We Are"}</h4>
              <p>
                <strong>Om Gurudev Bahuudeshiya Sevabhavi Sanstha Aurangabad</strong> is a committed NGO working to uplift underprivileged communities through impactful social welfare activities. We work across various sectors including education, healthcare, skill development, and rural empowerment.
              </p>
              <p>
                We believe in inclusive growth and long-term sustainable development by empowering individuals and fostering community engagement. Our initiatives reach remote areas to ensure no one is left behind.
              </p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t ? t("about.joinUs") : "Join Us"}
              </button>
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="row mt-5">
          <div className="col-md-4" data-aos="fade-up">
            <div className="info-box shadow-sm">
              <i className="bi bi-lightbulb-fill icon"></i>
              <h5>{t ? t("about.vision") : "Vision"}</h5>
              <p>{t ? t("about.visionText") : "Empowering lives through sustainable social development and inclusive growth."}</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="info-box shadow-sm">
              <i className="bi bi-bullseye icon"></i>
              <h5>{t ? t("about.mission") : "Mission"}</h5>
              <ul>
                <li>Ensure quality education and literacy</li>
                <li>Promote health and hygiene awareness</li>
                <li>Empower women and youth with skills</li>
                <li>Support rural and farmer livelihoods</li>
                <li>Foster sustainable communities</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="info-box shadow-sm">
              <i className="bi bi-heart-fill icon"></i>
              <h5>{t ? t("about.values") : "Values"}</h5>
              <p>{t ? t("about.valuesText") : "Integrity, Equality, Compassion, Community, Sustainability"}</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        {/* Certificates Section */}
        <div className="certificates-section mt-5">
          <h3 className="text-center mb-4" data-aos="fade-down">
            Our Certification
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
