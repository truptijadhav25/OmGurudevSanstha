import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { FaTags } from "react-icons/fa";

const projectData = [
  {
    title: "Sanitary Napkin Distribution",
    image: "/WomenImg.png",
    description:
      "Providing sanitary napkins to school girls to promote menstrual hygiene, awareness, and reduce dropout rates.",
    tags: ["1000+ Girls", "15+ Schools"],
    category: "Ongoing",
  },
  {
    title: "Tree Plantation",
    image: "/Tree.jpg",
    description:
      "Organizing tree plantation and clean-up drives in rural & urban areas to build a sustainable and greener environment.",
    tags: ["3000+ Trees", "20 Locations"],
    category: "Completed",
  },
  {
    title: "Mahila Sakshamikaran",
    image: "/WomenEmpowerment.png",
    description:
      "Skill training programs for women in tailoring, beauty, and small entrepreneurship to empower self-reliance.",
    tags: ["120+ Women", "5 Training Batches"],
    category: "Ongoing",
  },
  {
    title: "Navi Disha",
    image: "/NaviDisha.jpg",
    description:
      "Skill training & placement initiative focused on preparing youth for careers in IT, Cyber Security, and professional fields. Successfully trained and placed 100+ students in reputed companies.",
    tags: ["100+ Students", "Cyber Security", "Placements"],
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
    <section className="projects-section" id="projects">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            whileTap={{ scale: 0.9 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="img-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="img-overlay"></div>
            </div>
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
