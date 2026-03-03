import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExperienceDetail from './pages/ExperienceDetail';
import AllProjects from './pages/AllProjects';

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
                  <Experience />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              } 
            />
            <Route path="/experience/:experienceId" element={<ExperienceDetail />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
