import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { FaTags } from "react-icons/fa";

const projectData = [
  {
    title: "Education for All",
    image: "/Education.png",
    description: "Distributing school kits and digital tools to rural children.",
    tags: ["500+ Kits", "25+ Schools"],
    category: "Ongoing",
  },
  {
    title: "Swasthya Seva",
    image: "/Health.avif",
    description: "Monthly free health checkups in backward villages.",
    tags: ["1200+ Beneficiaries", "12 Camps"],
    category: "Completed",
  },
  {
    title: "Green Village Mission",
    image: "/Tree.jpg",
    description: "Tree plantation and clean-up drives in rural areas.",
    tags: ["2000+ Trees", "15 Locations"],
    category: "Ongoing",
  },
  {
    title: "Women Empowerment Drive",
    image: "/Women.png",
    description: "Skill training programs in tailoring and beauty for women.",
    tags: ["75+ Women", "3 Batches"],
    category: "Completed",
  },
];

const categories = ["All", "Ongoing", "Completed"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === selectedCategory);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Our Projects</h2>

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    <FaTags className="tag-icon" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
