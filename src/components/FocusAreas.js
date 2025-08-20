import React, { useEffect } from 'react';
import './FocusAreas.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const FocusAreas = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const areas = [
    {
      icon: 'bi bi-book',
      title: t ? t('focus.education') : 'Education',
      desc: t ? t('focus.educationText') : 'Promoting literacy and quality education through innovative programs in underserved communities.'
    },
    {
      icon: 'bi bi-heart-pulse',
      title: t ? t('focus.healthcare') : 'Healthcare',
      desc: t ? t('focus.healthcareText') : 'Providing access to medical camps, health check-ups, and awareness programs for healthier lives.'
    },
    {
      icon: 'bi bi-tools',
      title: t ? t('focus.skills') : 'Skill Development',
      desc: t ? t('focus.skillsText') : 'Empowering youth and women with vocational training and skill enhancement workshops.'
    },
    {
      icon: 'bi bi-tree-fill',
      title: t ? t('focus.environment') : 'Environment',
      desc: t ? t('focus.environmentText') : 'Spreading environmental awareness and encouraging sustainable practices in rural regions.'
    },
    {
      icon: 'bi bi-people-fill',
      title: t ? t('focus.women') : 'Women & Child Welfare',
      desc: t ? t('focus.womenText') : 'Improving lives of women and children by ensuring rights, safety, and growth opportunities.'
    },
    {
      icon: 'bi bi-globe',
      title: t ? t('focus.rural') : 'Rural Development',
      desc: t ? t('focus.ruralText') : 'Building self-reliant villages through agricultural support, water conservation, and infrastructure.'
    }
  ];

  return (
    <section className="focus-areas-section" id="focus-areas">
      <div className="container">
        {/* Image + Heading Flex Layout */}
        <div className="focus-header" data-aos="fade-right">
          <img
            src="/Focus.png"
            alt="Focus Logo"
            className="focus-logo-left"
            data-aos="zoom-in"
          />
          <div className="focus-heading-content">
            <h2 className="focus-title">
              {t ? t('focus.title') : <>Our <span className="highlight">Focus Areas</span></>}
            </h2>
            <p className="focus-subtitle">
              {t ? t('focus.subtitle') : 'Driving impactful change through strategic initiatives'}
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="focus-area-grid">
          {areas.map((area, index) => (
            <div
              className="focus-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <i className={`focus-icon ${area.icon}`}></i>
              <h4>{area.title}</h4>
              <p>{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
