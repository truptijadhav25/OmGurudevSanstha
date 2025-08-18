import React from "react";
import "./Impact.css";
import { FaSchool, FaStethoscope, FaLeaf, FaFemale } from "react-icons/fa";
import { motion } from "framer-motion";

const impactData = [
  {
    icon: <FaSchool />,
    title: "Education Kits Distributed",
    stat: "500+",
    description: "School kits provided to underprivileged children.",
  },
  {
    icon: <FaStethoscope />,
    title: "Health Camp Beneficiaries",
    stat: "1200+",
    description: "Free health checkups across rural areas.",
  },
  {
    icon: <FaLeaf />,
    title: "Trees Planted",
    stat: "2000+",
    description: "Tree plantation drives for a greener tomorrow.",
  },
  {
    icon: <FaFemale />,
    title: "Women Empowered",
    stat: "75+",
    description: "Skill development through training programs.",
  },
];

const Impact = () => {
  return (
    <section className="impact-section">
      <h2 className="impact-heading">Our Impact</h2>
      <p className="impact-subtitle">
        Transforming lives through consistent efforts and community support.
      </p>
      <div className="impact-grid">
        {impactData.map((item, index) => (
          <motion.div
            key={index}
            className="impact-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="impact-icon">{item.icon}</div>
            <h3 className="impact-title">{item.title}</h3>
            <p className="impact-stat">{item.stat}</p>
            <p className="impact-description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
