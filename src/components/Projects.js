import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { FaTags } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projectData = [
    {
      title: t("projects.sanitaryTitle"),
      image: "/WomenImg.png",
      description: t("projects.sanitaryDesc"),
      tags: [t("projects.sanitaryTag1"), t("projects.sanitaryTag2")],
      category: t("projects.ongoing"),
    },
    {
      title: t("projects.treeTitle"),
      image: "/Tree.jpg",
      description: t("projects.treeDesc"),
      tags: [t("projects.treeTag1"), t("projects.treeTag2")],
      category: t("projects.completed"),
    },
    {
      title: t("projects.womenEmpTitle"),
      image: "/WomenEmpowerment.png",
      description: t("projects.womenEmpDesc"),
      tags: [t("projects.womenEmpTag1"), t("projects.womenEmpTag2")],
      category: t("projects.ongoing"),
    },
    {
      title: t("projects.naviTitle"),
      image: "/NaviDisha.jpg",
      description: t("projects.naviDesc"),
      tags: [
        t("projects.naviTag1"),
        t("projects.naviTag2"),
        t("projects.naviTag3"),
      ],
      category: t("projects.completed"),
    },
  ];

  const categories = [
    t("projects.all"),
    t("projects.ongoing"),
    t("projects.completed"),
  ];

  const [selectedCategory, setSelectedCategory] = useState(t("projects.all"));

  const filteredProjects =
    selectedCategory === t("projects.all")
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
        {t("projects.title")}
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
