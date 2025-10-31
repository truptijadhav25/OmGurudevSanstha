// src/components/Impact.js
import { useTranslation } from "react-i18next";
import React, { useRef, useEffect, useState } from "react";
import "./Impact.css";
import { FaSchool, FaStethoscope, FaLeaf, FaFemale } from "react-icons/fa";
import { motion, useInView, animate } from "framer-motion";

const Impact = () => {
  const { t } = useTranslation();

  const impactData = [
    {
      icon: <FaSchool />,
      titleKey: "impact.educationTitle",
      stat: 500,
      suffix: "+",
      descKey: "impact.educationDesc",
    },
    {
      icon: <FaStethoscope />,
      titleKey: "impact.healthTitle",
      stat: 1200,
      suffix: "+",
      descKey: "impact.healthDesc",
    },
    {
      icon: <FaLeaf />,
      titleKey: "impact.environmentTitle",
      stat: 2000,
      suffix: "+",
      descKey: "impact.environmentDesc",
    },
    {
      icon: <FaFemale />,
      titleKey: "impact.womenTitle",
      stat: 75,
      suffix: "+",
      descKey: "impact.womenDesc",
    },
  ];

  // Counter animation
  const Counter = ({ to, duration = 2, suffix = "" }) => {
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

    return <span ref={nodeRef} className="glow-counter">0{suffix}</span>;
  };

  return (
    <section className="impact-section">
      <h2 className="impact-heading">{t("impact.heading")}</h2>
      <p className="impact-subtitle">{t("impact.subtitle")}</p>

      <div className="impact-grid">
        {impactData.map((item, index) => (
          <motion.div
            key={index}
            className="impact-card"
            initial={{ opacity: 0, y: 60, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.07, rotate: -1 }}
          >
            <motion.div
              className="impact-icon"
              whileHover={{
                scale: 1.2,
                rotate: 12,
                boxShadow: "0 0 25px rgba(0,255,180,0.6)",
              }}
              transition={{ duration: 0.4 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="impact-title">{t(item.titleKey)}</h3>
            <p className="impact-stat">
              <Counter to={item.stat} suffix={item.suffix} duration={2} />
            </p>
            <p className="impact-description">{t(item.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
