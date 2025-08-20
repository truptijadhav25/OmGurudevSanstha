<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./Help.css";
import { QRCodeCanvas } from "qrcode.react";
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
  FaChild
} from "react-icons/fa";

const Help = () => {
  const upiLink =
    "upi://pay?pa=omguruadev@upi&pn=Om%20Gurudev%20Sanstha&cu=INR";

  // Animated counters
  const [families, setFamilies] = useState(0);
  const [children, setChildren] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    let fam = 0, child = 0, proj = 0;
    const interval = setInterval(() => {
      if (fam < 500) setFamilies(++fam);
      if (child < 2000) setChildren(child += 10);
      if (proj < 50) setProjects(++proj);
      if (fam >= 500 && child >= 2000 && proj >= 50) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="help-container">
      {/* Hero Banner */}
      <section className="help-hero">
        <div className="help-hero-content">
          <h1>Your Small Step Can Bring a Big Change</h1>
          <p>
            Join us in creating a brighter future for children, families, and
            communities.
          </p>
          <div className="help-buttons">
            <a href="#donate" className="help-btn donate">Donate Now</a>
            <a href="#volunteer" className="help-btn volunteer">Become a Volunteer</a>
          </div>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* Main Options */}
      <section className="help-main">
        <h2>How You Can Help</h2>
        <p className="subtitle">Join us in creating positive change</p>

        <div className="help-options">
          <div className="help-card" id="volunteer" data-aos="fade-up">
            <span className="badge">New</span>
            <FaHandsHelping className="icon" />
            <h3>Volunteer with us</h3>
            <p>Join our team of dedicated volunteers and make a direct impact in communities.</p>
            <button className="card-btn">Become a Volunteer</button>
          </div>

          <div className="help-card" id="donate" data-aos="fade-up" data-aos-delay="200">
            <FaDonate className="icon" />
            <h3>Donate to support a cause</h3>
            <p>Make a difference with your contribution to our various programs and initiatives.</p>
            <div className="donate-buttons">
              <button className="card-btn">Donate ₹500</button>
              <button className="card-btn">Donate ₹1000</button>
            </div>
          </div>

          <div className="help-card" data-aos="fade-up" data-aos-delay="400">
            <FaGift className="icon" />
            <h3>In-Kind Support</h3>
            <p>Contribute resources like books, clothes, or equipment to support our mission.</p>
            <button className="card-btn">Contribute Now</button>
          </div>

          <div className="help-card" data-aos="fade-up" data-aos-delay="600">
            <FaBuilding className="icon" />
            <h3>Partner for CSR or government schemes</h3>
            <p>Collaborate with us for meaningful CSR initiatives and social impact programs.</p>
            <button className="card-btn">Partner with Us</button>
          </div>
        </div>
      </section>

      {/* Donation + Bank Details + Contact */}
      <section className="quick-contact-section">
        <div className="quick-donation" data-aos="zoom-in">
=======
import React from "react";
import "./Help.css";
import { QRCodeCanvas } from "qrcode.react";

const Help = () => {
  const upiLink = "upi://pay?pa=omguruadev@upi&pn=Om%20Gurudev%20Sanstha&cu=INR";

  return (
    <div className="help-container">
      <h2>How You Can Help</h2>
      <p>Join us in creating positive change</p>

      <div className="help-options">
        <div className="help-card">
          <span role="img" aria-label="volunteer">🤝</span>
          <h3>Volunteer with us</h3>
          <p>Join our team of dedicated volunteers and make a direct impact in communities</p>
          <button>Become a Volunteer</button>
        </div>

        <div className="help-card">
          <span role="img" aria-label="donate">💸</span>
          <h3>Donate to support a cause</h3>
          <p>Make a difference with your contribution to our various programs and initiatives</p>
          <div className="donate-buttons">
            <button>Donate ₹500</button>
            <button>Donate ₹1000</button>
          </div>
          <button className="custom-amount">Custom Amount</button>
        </div>

        <div className="help-card">
          <span role="img" aria-label="partner">🧑‍💼</span>
          <h3>Partner for CSR or government schemes</h3>
          <p>Collaborate with us for meaningful CSR initiatives and social impact programs</p>
          <button>Partner with Us</button>
        </div>
      </div>

      <div className="quick-contact-section">
        <div className="quick-donation">
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
          <h4>Quick Donation</h4>
          <p>Scan the QR Code below to donate via UPI:</p>
          <QRCodeCanvas value={upiLink} size={180} />
          <p><strong>UPI ID:</strong> omguruadev@upi</p>
<<<<<<< HEAD
          {/* Progress bar */}
          <div className="progress-container">
            <p>Goal: ₹50,000</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: "65%"}}>₹32,500 raised</div>
            </div>
          </div>
        </div>

        <div className="bank-transfer" data-aos="zoom-in" data-aos-delay="200">
          <h4>Bank Transfer Details</h4>
          <p><strong>Account Name:</strong> Om Gurudev Bahuudeshiya Sevabhavi Sanstha</p>
          <p><strong>Branch:</strong> Amthana, Taluka Sillod, District Chhatrapati Sambhajinagar</p>
          <p><strong>Account Number:</strong> 60544638141</p>
          <p><strong>IFSC Code:</strong> MAHB0000196</p>
        </div>

        <div className="contact-info" data-aos="zoom-in" data-aos-delay="400">
          <h4>Contact Us</h4>
          <p>📞 Phone: +91-XXXXX-XXXXX</p>
          <p>📧 Email: info@omgurudev.org</p>
          <p>📍 Address: Ho No 30 Rashtramata jijau housing society Sawangi (Harsul), Chhatrapati Sambhajinagar, Maharashtra 431008</p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat-card"><FaUsers className="stat-icon" /><h3>{families}+</h3><p>Families Helped</p></div>
          <div className="stat-card"><FaChild className="stat-icon" /><h3>{children}+</h3><p>Children Supported</p></div>
          <div className="stat-card"><FaProjectDiagram className="stat-icon" /><h3>{projects}+</h3><p>Projects Completed</p></div>
        </div>
      </section>
=======
        </div>

        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Phone: +91-XXXXX-XXXXX</p>
          <p>Email: info@omgurudev.org</p>
          <p>Address: Office Address, Aurangabad, Maharashtra</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
    </div>
  );
};

export default Help;
