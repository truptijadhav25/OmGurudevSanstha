import React from 'react';
import './Team.css';
<<<<<<< HEAD

=======
import { FaLinkedin } from 'react-icons/fa';
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2

const teamMembers = [
  {
    name: 'Smt. Priti Engle',
    role: 'President',
<<<<<<< HEAD
    image: '/priti ingle.jpg',
    bio: "Founder of an NGO dedicated to social upliftment and rural development. Over a decade of service leading educational programs, women's empowerment initiatives, and community health projects",
    
=======
    image: '/team1.jpg', // Replace with actual image in /public
    bio: "Founder of an NGO dedicated to social upliftment and rural development. Over a decade of service leading educational programs, women's empowerment initiatives, and community health projects"
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
  },
  {
    name: 'Dr. Dilip Pawar',
    role: 'Secretary',
<<<<<<< HEAD
    image: '/dilip Pawar.jpg',
    bio: 'Drives operations and coordinates stakeholders for effective program execution. Made significant impact in education through innovative learning programs and in finance through microfinance solutions for underserved communities.',
    
=======
    image: '/team2.jpg',
    bio: 'Drives operations and coordinates stakeholders for effective program execution. Made significant impact in education through innovative learning programs and in finance through microfinance solutions for underserved communities.'
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
  },
  {
    name: 'Shree. Ankush Sapkal',
    role: 'Vice President',
<<<<<<< HEAD
    image: '/ankush sapkal.jpg',
    bio: 'Leader in digital transformation and education with impact in the IT industry. Helps students secure IT and cybersecurity careers through training programs and mentorship. Successfully placed hundreds of students by building industry-academia partnerships.',
    
  },
  {
    name: 'Smt. Rama Engle',
    role: 'Joint Secretary',
    image: '/rama ingle.jpg',
    bio: 'Experienced advocate and astrology expert with significant impact in the legal and spiritual guidance sectors. Provides legal counsel while helping individuals find their correct life path through astrological insights and spiritual (adhyatmik) guidance.',
    
=======
    image: '/team3.jpg',
    bio: 'Leader in digital transformation and education with impact in the IT industry. Helps students secure IT and cybersecurity careers through training programs and mentorship. Successfully placed hundreds of students by building industry-academia partnerships.'
  },
  {
    name: 'Shree. Rama Engle',
    role: 'Joint Secretary',
    image: '/team4.jpg',
    bio: 'Experienced advocate and astrology expert with significant impact in the legal and spiritual guidance sectors. Provides legal counsel while helping individuals find their correct life path through astrological insights and spiritual (adhyatmik) guidance. Successfully assisted hundreds of clients in legal matters and provided life direction to countless people seeking purpose and spiritual clarity.'
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
  }
];

const Team = () => {
  return (
    <section className="team-section">
<<<<<<< HEAD
      <h2 className="team-title">✨ Meet Our Team ✨</h2>
=======
      <h2 className="team-title">Meet Our Team</h2>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
      <p className="team-subtitle">
        Our leadership brings experience, passion, and community-first values.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
<<<<<<< HEAD
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} className="team-img" />
            </div>
=======
            <img src={member.image} alt={member.name} className="team-img" />
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
<<<<<<< HEAD

=======
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"></a>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
