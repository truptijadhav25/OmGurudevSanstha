<<<<<<< HEAD
import React, { useRef, useEffect, useState } from "react";
import "./Impact.css";
import { FaSchool, FaStethoscope, FaLeaf, FaFemale } from "react-icons/fa";
import { motion, useInView, animate } from "framer-motion";
=======
import React from "react";
import "./Impact.css";
import { FaSchool, FaStethoscope, FaLeaf, FaFemale } from "react-icons/fa";
import { motion } from "framer-motion";
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2

const impactData = [
  {
    icon: <FaSchool />,
    title: "Education Kits Distributed",
<<<<<<< HEAD
    stat: 500,
    suffix: "+",
=======
    stat: "500+",
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
    description: "School kits provided to underprivileged children.",
  },
  {
    icon: <FaStethoscope />,
    title: "Health Camp Beneficiaries",
<<<<<<< HEAD
    stat: 1200,
    suffix: "+",
=======
    stat: "1200+",
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
    description: "Free health checkups across rural areas.",
  },
  {
    icon: <FaLeaf />,
    title: "Trees Planted",
<<<<<<< HEAD
    stat: 2000,
    suffix: "+",
=======
    stat: "2000+",
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
    description: "Tree plantation drives for a greener tomorrow.",
  },
  {
    icon: <FaFemale />,
    title: "Women Empowered",
<<<<<<< HEAD
    stat: 75,
    suffix: "+",
=======
    stat: "75+",
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
    description: "Skill development through training programs.",
  },
];

<<<<<<< HEAD
// ✅ Running Counter Component
const Counter = ({ to, duration = 2, suffix }) => {
  const nodeRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(value) + suffix;
          }
        },
        onComplete() {
          setHasAnimated(true);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration, suffix, hasAnimated]);

  return <span ref={nodeRef}>0{suffix}</span>; // starts at 0, animates up
};

const Impact = () => (
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="impact-icon">{item.icon}</div>
          <h3 className="impact-title">{item.title}</h3>
          <p className="impact-stat">
            <Counter to={item.stat} suffix={item.suffix} duration={2} />
          </p>
          <p className="impact-description">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

=======
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

>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
export default Impact;
