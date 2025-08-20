import React, { useRef, useEffect, useState } from "react";
import "./Impact.css";
import { FaSchool, FaStethoscope, FaLeaf, FaFemale } from "react-icons/fa";
import { motion, useInView, animate } from "framer-motion";

const impactData = [
  {
    icon: <FaSchool />,
    title: "Education Kits Distributed",
    stat: 500,
    suffix: "+",
    description: "School kits provided to underprivileged children.",
  },
  {
    icon: <FaStethoscope />,
    title: "Health Camp Beneficiaries",
    stat: 1200,
    suffix: "+",
    description: "Free health checkups across rural areas.",
  },
  {
    icon: <FaLeaf />,
    title: "Trees Planted",
    stat: 2000,
    suffix: "+",
    description: "Tree plantation drives for a greener tomorrow.",
  },
  {
    icon: <FaFemale />,
    title: "Women Empowered",
    stat: 75,
    suffix: "+",
    description: "Skill development through training programs.",
  },
];

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

export default Impact;
