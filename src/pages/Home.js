<<<<<<< HEAD
// src/pages/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
=======
import React from 'react';
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
import Hero from '../components/Hero';
import About from '../components/About';
import FocusAreas from '../components/FocusAreas';
import Projects from '../components/Projects';
import Impact from '../components/Impact';
import Team from '../components/Team';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
<<<<<<< HEAD
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />

      {/* Highlights */}
=======
import Contact from '../components/Contact'; // ✅ not with curly braces

import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
      <section className="highlights-section bg-light py-5 text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="highlight-box shadow p-4 rounded h-100">
<<<<<<< HEAD
                <h4 className="mb-3">{t('home.community')}</h4>
                <p>{t('home.communityText')}</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="highlight-box shadow p-4 rounded h-100">
                <h4 className="mb-3">{t('home.reach')}</h4>
                <p>{t('home.reachText')}</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="highlight-box shadow p-4 rounded h-100">
                <h4 className="mb-3">{t('home.impact')}</h4>
                <p>{t('home.impactText')}</p>
=======
                <h4 className="mb-3">Community Driven</h4>
                <p>
                  We focus on building strong community connections to solve real-world problems.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="highlight-box shadow p-4 rounded h-100">
                <h4 className="mb-3">Wider Reach</h4>
                <p>
                  Serving across regions to ensure no one is left behind in our journey of growth.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="highlight-box shadow p-4 rounded h-100">
                <h4 className="mb-3">Empowering Impact</h4>
                <p>
                  Focusing on sustainable development and real transformation through our programs.
                </p>
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Other sections (these components should also be i18n-ready) */}
=======
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
      <About />
      <FocusAreas />
      <Projects />
      <Impact />
      <Team />
      <Partners />
      <Testimonials />
      <Contact />

<<<<<<< HEAD
      <Footer />
=======
>>>>>>> 7d6bcea991caa169dc4b72c4d43d00b70a1a97b2
    </>
  );
};

export default Home;
