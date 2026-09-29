import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import TechStack from './components/TechStack.jsx';
import SoftSkills from './components/SoftSkills.jsx';
import Experience from './components/Experience.jsx';
import CodingProfiles from './components/CodingProfiles.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FinishingTouches from './components/FinishingTouches.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050203] text-white relative selection:bg-[#ff1f3d] selection:text-white">
      {/* Fixed blue grid overlay */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none cyber-grid-overlay" 
        aria-hidden="true" 
      />

      {/* Animated smoke-blue fog waves */}
      <div 
        className="blue-fog-overlay" 
        aria-hidden="true" 
      />

      {/* Main Content Hierarchy */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          {/* 1. Hero (id="home") */}
          <Hero />

          {/* 2. About (id="about") */}
          <About />

          {/* 3. Education (id="education") */}
          <Education />

          {/* 4. TechStack (id="skills") */}
          <TechStack />

          {/* 5. SoftSkills (id="softskills") */}
          <SoftSkills />

          {/* 6. Experience (id="experience") */}
          <Experience />

          {/* 7. CodingProfiles (id="profiles") */}
          <CodingProfiles />

          {/* 8. Projects (id="projects") */}
          <Projects />

          {/* 9. Certifications (id="certs") */}
          <Certifications />

          {/* 10. Contact (id="contact") */}
          <Contact />
        </main>

        <Footer />

        {/* Finishing Touches: Dot Nav, Settings Tab & Drawer, Back-To-Top Button */}
        <FinishingTouches />
      </div>
    </div>
  );
}
