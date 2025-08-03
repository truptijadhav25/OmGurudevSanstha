import React from "react";
import "./Team.css";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Shri. Suresh Patil",
    role: "President / Founder",
    image: "/team1.jpg", // Replace with actual image in /public
    bio: "Founder of the NGO, committed to social upliftment and sustainable rural development.",

  },
  {
    name: "Shri. Rajeev Joshi",
    role: "Secretary",
    image: "/team2.jpg",
    bio: "Drives operations and coordinates with stakeholders for effective program execution.",

  },
  {
    name: "Smt. Lata Deshmukh",
    role: "Vice President",
    image: "/team3.jpg",
    bio: "Leads women's empowerment and health initiatives in underserved communities.",

  },
  {
    name: "Ms. Meera Pawar",
    role: "Treasurer",
    image: "/team4.jpg",
    bio: "Ensures transparent and responsible financial management for all projects.",

  }
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <p className="team-subtitle">Our leadership brings experience, passion, and community-first values.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">

              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
