// src/components/Team.js
import React from "react";
import { useTranslation } from "react-i18next";
import "./Team.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    nameKey: "team.members.priti.name",
    roleKey: "team.members.priti.role",
    image: "/priti ingle.jpg",
    bioKey: "team.members.priti.bio",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    nameKey: "team.members.ankush.name",
    roleKey: "team.members.ankush.role",
    image: "/ankush sapkal.jpg",
    bioKey: "team.members.ankush.bio",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    nameKey: "team.members.dilip.name",
    roleKey: "team.members.dilip.role",
    image: "/dilip pawar.jpg",
    bioKey: "team.members.dilip.bio",
    linkedin: "#",
  },
  {
    nameKey: "team.members.rama.name",
    roleKey: "team.members.rama.role",
    image: "/rama_ingle.jpg",
    bioKey: "team.members.rama.bio",
    linkedin: "#",
  },
  {
    nameKey: "team.members.dipali.name",
    roleKey: "team.members.dipali.role",
    image: "/dipali_paar.jpg",
    bioKey: "team.members.dipali.bio",
    linkedin: "#",
  },
  {
    nameKey: "team.members.renuka.name",
    roleKey: "team.members.renuka.role",
    image: "/Renuka_Sapkal.jpg",
    bioKey: "team.members.renuka.bio",
    linkedin: "#",
  },
  {
    nameKey: "team.members.kakasaheb.name",
    roleKey: "team.members.kakasaheb.role",
    image: "/kakasaheb_pawar.jpg",
    bioKey: "team.members.kakasaheb.bio",
    linkedin: "#",
  },
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="team-section">
      <div className="sparkle-bg"></div>
      <h2 className="team-title">✨ {t("team.title")} ✨</h2>
      <p className="team-subtitle">{t("team.subtitle")}</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            className="team-card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="team-img-wrapper floating">
              <img src={member.image} alt={t(member.nameKey)} className="team-img" />
            </div>
            <div className="team-info">
              <h3>{t(member.nameKey)}</h3>
              <p
                className={`team-role role-${t(member.roleKey)
                  .replace(/\s+/g, "")
                  .toLowerCase()}`}
              >
                {t(member.roleKey)}
              </p>
              <p className="team-bio">{t(member.bioKey)}</p>
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
