// src/components/Partners.js

import React from 'react';
import './Partners.css';

const partnersData = [
  {
    name: 'Local Business Group',
    logo: '/images/partner1.png',
    type: 'CSR Partner',
    description: 'Supported education initiatives and provided logistics help for rural programs.'
  },
  {
    name: 'Health First Foundation',
    logo: '/images/partner2.png',
    type: 'NGO Ally',
    description: 'Collaborated in conducting health camps in remote villages.'
  },
  {
    name: 'Green Earth Trust',
    logo: '/images/partner3.png',
    type: 'Environmental Partner',
    description: 'Contributed trees and awareness support under our plantation drives.'
  },
  {
    name: 'Zilla Parishad Aurangabad',
    logo: '/images/partner4.png',
    type: 'Government Body',
    description: 'Facilitated permissions and coordination for women training programs.'
  },
];

const Partners = () => {
  return (
    <section className="partners-section">
      <h2>Partners, Donors & CSR Collaborations</h2>
      <div className="partners-grid">
        {partnersData.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <h3>{partner.name}</h3>
            <span className="partner-type">{partner.type}</span>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
