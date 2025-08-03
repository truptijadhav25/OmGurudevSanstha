import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sunita Patil",
    role: "Beneficiary – Tailoring Program",
    message: "The tailoring course changed my life. Now I run my own small boutique.",
    image: "/images/testimonials/woman1.jpg",
  },
  {
    name: "Ravi Shinde",
    role: "Volunteer",
    message: "Volunteering here gave me purpose and a sense of fulfillment.",
    image: "/images/testimonials/man1.jpg",
  },
  {
    name: "Meena Kale",
    role: "Beneficiary – Health Camp",
    message: "Thanks to their free health checkups, my mother’s illness was detected early.",
    image: "/images/testimonials/woman2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <h2>Voices of Change</h2>
        <p>Real stories from people we've touched</p>
      </div>

      <div className="testimonial-cards-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-img-wrapper">
              <img src={t.image} alt={t.name} />
            </div>
            <div className="testimonial-text">
              <p className="testimonial-message">“{t.message}”</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
