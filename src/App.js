// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop'; // ✅ Import here
import Home from './pages/Home';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import Projects from './components/Projects';
import Impact from './components/Impact';
import Team from './components/Team';
import Partners from './components/Partners';

import Help from './components/Help';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/focus-areas" element={<FocusAreas />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
