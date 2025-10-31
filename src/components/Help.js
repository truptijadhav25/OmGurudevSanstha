import React, { useEffect, useState } from "react";
import "./Help.css";
import { QRCodeCanvas } from "qrcode.react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import {
  FaHandsHelping,
  FaDonate,
  FaBuilding,
  FaGift,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaUsers,
  FaProjectDiagram,
  FaChild,
} from "react-icons/fa";

const Help = () => {
  const { t } = useTranslation();
  const upiLink =
    "upi://pay?pa=omguruadev@upi&pn=Om%20Gurudev%20Sanstha&cu=INR";

  const [families, setFamilies] = useState(0);
  const [children, setChildren] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    let fam = 0,
      child = 0,
      proj = 0;
    const interval = setInterval(() => {
      if (fam < 500) setFamilies(++fam);
      if (child < 2000) setChildren((child += 10));
      if (proj < 50) setProjects(++proj);
      if (fam >= 500 && child >= 2000 && proj >= 50) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="help-container">
      <a href="#donate" className=" top-donate-btn floating-donate-btn" data-aos="zoom-in">
        ❤️ {t("help.donateNow")}
      </a>

      {/* HERO SECTION */}
      <section className="help-hero">
        <div className="help-hero-content" data-aos="fade-up">
          <h1>
            {t("help.heroTitle1")}{" "}
            <span className="highlight">{t("help.heroHighlight1")}</span>{" "}
            {t("help.heroTitle2")}{" "}
            <span className="highlight">{t("help.heroHighlight2")}</span>
          </h1>
          <p>{t("help.heroSubtitle")}</p>
          <div className="help-buttons">
            <a href="#donate" className="help-btn donate">
              {t("help.donateNow")}
            </a>
            <a href="#volunteer" className="help-btn volunteer">
              {t("help.volunteerNow")}
            </a>
          </div>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* HOW YOU CAN HELP */}
      <section className="help-main">
        <h2 data-aos="fade-up">{t("help.howYouCanHelp")}</h2>
        <p className="subtitle" data-aos="fade-up">
          {t("help.joinPositiveChange")}
        </p>

        <div className="help-options">
          <div className="help-card" id="volunteer" data-aos="zoom-in">
            <span className="badge">New</span>
            <FaHandsHelping className="icon" />
            <h3>{t("help.volunteerTitle")}</h3>
            <p>{t("help.volunteerText")}</p>
            <button className="card-btn">{t("help.volunteerNow")}</button>
          </div>

          <div
            className="help-card"
            id="donate"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaDonate className="icon" />
            <h3>{t("help.donateTitle")}</h3>
            <p>{t("help.donateText")}</p>
            <div className="donate-buttons">
              <button className="card-btn">Donate ₹500</button>
              <button className="card-btn">Donate ₹1000</button>
            </div>
          </div>

          <div className="help-card" data-aos="zoom-in" data-aos-delay="400">
            <FaGift className="icon" />
            <h3>{t("help.inkindTitle")}</h3>
            <p>{t("help.inkindText")}</p>
            <button className="card-btn">{t("help.inkindTitle")}</button>
          </div>

          <div className="help-card" data-aos="zoom-in" data-aos-delay="600">
            <FaBuilding className="icon" />
            <h3>{t("help.partnerTitle")}</h3>
            <p>{t("help.partnerText")}</p>
            <button className="card-btn">{t("help.partnerTitle")}</button>
          </div>
        </div>
      </section>

      {/* DONATION, BANK TRANSFER, CONTACT */}
      <section className="quick-contact-section">
        <div className="quick-donation" data-aos="zoom-in">
          <h4>{t("help.quickDonation")}</h4>
          <p>{t("help.scanUPI")}</p>
          <QRCodeCanvas value={upiLink} size={180} />
          <p>
            <strong>{t("help.upiId")}</strong>
          </p>

          <div className="progress-container">
            <p>Goal: ₹50,000</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "65%" }}>
                ₹32,500 raised
              </div>
            </div>
          </div>
        </div>

        {/* BANK TRANSFER DETAILS */}
        <div className="bank-details-card" data-aos="zoom-in" data-aos-delay="200">
          <h4 className="bank-heading">{t("help.bankTransfer")}</h4>
          <p>
            <strong>{t("help.accountName")}:</strong>{" "}
            <span>Om Gurudev Bahuudeshiya Sevabhavi Sanstha, Aurangabad</span>
          </p>
          <p>
            <strong>{t("help.branch")}:</strong>{" "}
            <span>Bank of Maharashtra, Garkheda Branch</span>
          </p>
          <p>
            <strong>{t("help.accountNumber")}:</strong>{" "}
            <span>60248762543</span>
          </p>
          <p>
            <strong>{t("help.ifscCode")}:</strong>{" "}
            <span>MAHB0000048</span>
          </p>
        </div>

        <div className="contact-section" data-aos="zoom-in" data-aos-delay="400">
          <h4 className="contact-heading">{t("help.contactUs")}</h4>
          <div className="contact-details">
            <p> {t("help.phone")}</p>
            <p> {t("help.email")}</p>
            <p> {t("help.address")}</p>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon fb">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon tw">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon ig">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon ln">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="impact-section">
        <h2>{t("help.ourImpact")}</h2>
        <div className="impact-stats">
          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <h3>{families}+</h3>
            <p>{t("help.familiesHelped")}</p>
          </div>
          <div className="stat-card">
            <FaChild className="stat-icon" />
            <h3>{children}+</h3>
            <p>{t("help.childrenSupported")}</p>
          </div>
          <div className="stat-card">
            <FaProjectDiagram className="stat-icon" />
            <h3>{projects}+</h3>
            <p>{t("help.projectsCompleted")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
