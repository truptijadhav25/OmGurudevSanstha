import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="overlay"></div>
      <div className="container contact-container">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subtitle">
          We’d love to hear from you! Send us a message below.
        </p>

        <form className="contact-form">
          <div className="mb-3">
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control custom-input"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control custom-input"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn custom-btn px-5">
              Send Message 🚀
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
