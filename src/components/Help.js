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
          <h4>Quick Donation</h4>
          <p>Scan the QR Code below to donate via UPI:</p>
          <QRCodeCanvas value={upiLink} size={180} />
          <p><strong>UPI ID:</strong> omguruadev@upi</p>
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
    </div>
  );
};

export default Help;
