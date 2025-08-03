import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FocusAreas from '../components/FocusAreas';
import Projects from '../components/Projects';
import Impact from '../components/Impact';
import Team from '../components/Team';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact'; // ✅ not with curly braces

import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <section className="highlights-section bg-light py-5 text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="highlight-box shadow p-4 rounded h-100">
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
