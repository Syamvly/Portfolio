
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Research from './components/Research';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Aos is a global object from the CDN script
declare const AOS: any;

const BackgroundOrbs = () => (
  <>
    <div className="animated-orb-1"></div>
    <div className="animated-orb-2"></div>
  </>
);

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="bg-[#0A2463] text-[#1F2937] antialiased relative overflow-x-hidden">
      <BackgroundOrbs />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
