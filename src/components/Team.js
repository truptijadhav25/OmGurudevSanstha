import React from 'react';
import './Team.css';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Smt. Priti Engle',
    role: 'President',
    image: '/priti ingle.jpg',
    bio: "Founder of an NGO dedicated to social upliftment and rural development. Over a decade of service leading educational programs, women's empowerment initiatives, and community health projects",
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  },
  {
    name: 'Shree. Ankush Sapkal',
    role: 'Vice President',
    image: '/ankush sapkal.jpg',
    bio: 'Leader in digital transformation and education with impact in the IT industry. Helps students secure IT and cybersecurity careers through training programs and mentorship.',
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  },
  {
    name: 'Dr. Dilip Pawar',
    role: 'Secretary',
    image: '/dilip pawar.jpg',
    bio: 'Drives operations and coordinates stakeholders for effective program execution. Made significant impact in education and microfinance solutions for underserved communities.',
    linkedin: "#"
  },
  {
    name: 'Shree. Rama Engle',
    role: 'Joint Secretary',
    image: '/rama_ingle.jpg',
    bio: 'Experienced advocate and astrology expert with significant impact in legal and spiritual guidance.',
    linkedin: "#"
  },
  {
    name: 'Smt. Dipali Dilip Pawar',
    role: 'Treasurer',
    image: '/dipali_paar.jpg',
    bio: 'Over 9 years in the financial and banking sector, actively involved in social work and community development, ensuring transparent financial planning.',
    linkedin: "#"
  },
  {
    name: 'Smt. Renuka Sapkal',
    role: 'Team Member',
    image: '/Renuka_Sapkal.jpg',
    bio: 'Renuka Sapkal is an experienced professional committed to supporting individuals in the IT industry. She actively guides job seekers in enhancing their skills, preparing for opportunities, and achieving sustainable career growth. Her expertise and dedication to empowering people make her a valuable addition to the NGO body.',
    linkedin: "#"
  },
  {
    name: 'Shree Kakasaheb Pawar',
    role: 'Team Member',
    image: '/kakasaheb_pawar.jpg',
    bio: 'Kakasaheb Pawar has been actively contributing to the field of education by supporting various initiatives aimed at improving learning opportunities. His dedication to empowering students and creating awareness about the importance of education makes him a valuable member of the NGO body.',
    linkedin: "#"
  }
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="sparkle-bg"></div>
      <h2 className="team-title">✨ Meet Our Team ✨</h2>
      <p className="team-subtitle">
        Our leadership brings experience, passion, and community-first values.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            className="team-card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="team-img-wrapper floating">
              <img src={member.image} alt={member.name} className="team-img" />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className={`team-role role-${member.role.replace(/\s+/g, '').toLowerCase()}`}>
                {member.role}
              </p>
              <p className="team-bio">{member.bio}</p>
              <div className="social-links">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
