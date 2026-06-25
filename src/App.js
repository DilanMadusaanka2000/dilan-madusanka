import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceDetail from './components/ExperienceDetail';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <ExperienceDetail />
                  <CaseStudies />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              } 
            />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
