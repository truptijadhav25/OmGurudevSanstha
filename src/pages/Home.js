import React from 'react';
import { useTranslation } from 'react-i18next';

import Hero from '../components/Hero';
import About from '../components/About';
import FocusAreas from '../components/FocusAreas';
import Projects from '../components/Projects';
import Impact from '../components/Impact';
import Team from '../components/Team';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />

      {/* Highlights */}
      <section className="highlights-section bg-light py-5 text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="highlight-box shadow p-4 rounded h-100">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <FocusAreas />
      <Projects />
      <Impact />
      <Team />
      <Partners />
      <Testimonials />
      <Contact />

    </>
  );
};

export default Home;
