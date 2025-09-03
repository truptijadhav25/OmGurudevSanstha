// src/components/Partners.js
import React from 'react';
import './Partners.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const partnersData = [
  {
    name: 'Sythexhub Pvt Ltd',
    logo: '/synthex.avif',
    type: 'Technology Partner',
    description: 'Empowered our infrastructure with scalable software and secure cloud platforms.',
  },
  {
    name: 'AARNA Technologies Pvt Ltd',
    logo: '/Arnaa-logo.png',
    type: 'IT Solutions Partner',
    description: 'Delivered innovative tech solutions for community outreach and monitoring.',
  },
  {
    name: 'Perfect Urban Co-operative Society',
    logo: '/perfect.png',
    type: 'Financial Ally',
    description: 'Supported financial literacy programs and micro-savings initiatives.',
  },
  {
    name: 'Truth Tech Enterprise',
    logo: '/Truth_take.png',
    type: 'Innovation Partner',
    description: 'Brought automation and AI-based insights to improve impact tracking.',
  },
];

const Partners = () => {
  return (
    <section id="partners" className="partners-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-3">Our Core Partners</h2>
        <p className="section-subtitle mb-5">
          Collaborating with innovators to build a better future.
        </p>
        <div className="row justify-content-center">
          {partnersData.map((partner, index) => (
            <div
              className="col-sm-10 col-md-6 col-lg-4 col-xl-3 mb-4"
              key={index}
            >
              <div
                className="partner-card h-100 fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-body text-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo mb-3"
                  />
                  <h5 className="card-title">{partner.name}</h5>
                  <span className="partner-type mb-2">{partner.type}</span>
                  <p className="card-text">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
