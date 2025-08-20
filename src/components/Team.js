import React from 'react';
import './Team.css';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Smt. Priti Engle',
    role: 'President',
    image: '/priti ingle.jpg', // Replace with actual image in /public
    bio: "Founder of an NGO dedicated to social upliftment and rural development. Over a decade of service leading educational programs, women's empowerment initiatives, and community health projects"
  },
  {
    name: 'Shree. Ankush Sapkal',
    role: 'Vice President',
    image: '/ankush sapkal.jpg', // Replace with actual image in /public
    bio: 'Leader in digital transformation and education with impact in the IT industry. Helps students secure IT and cybersecurity careers through training programs and mentorship. Successfully placed hundreds of students by building industry-academia partnerships.'
  },
  {
    name: 'Dr. Dilip Pawar',
    role: 'Secretary',
    image: '/dilip pawar.jpg', // Replace with actual image in /public
    bio: 'Drives operations and coordinates stakeholders for effective program execution. Made significant impact in education through innovative learning programs and in finance through microfinance solutions for underserved communities.'
  },
  
  {
    name: 'Shree. Rama Engle',
    role: 'Joint Secretary',
    image: '/rama ingle.jpg', // Replace with actual image in /public
    bio: 'Experienced advocate and astrology expert with significant impact in the legal and spiritual guidance sectors. Provides legal counsel while helping individuals find their correct life path through astrological insights and spiritual (adhyatmik) guidance. Successfully assisted hundreds of clients in legal matters and provided life direction to countless people seeking purpose and spiritual clarity.'
  }
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <p className="team-subtitle">
        Our leadership brings experience, passion, and community-first values.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
              {/* Example with placeholder LinkedIn link; add member.linkedin if available */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
