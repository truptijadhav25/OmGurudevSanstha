import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="text-center mb-4">Get In Touch</h2>
        <form className="contact-form">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Your Message" rows="4" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact; // ✅ this is critical!
