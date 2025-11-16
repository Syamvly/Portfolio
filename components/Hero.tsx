
import React, { useEffect, useRef } from 'react';
import { ArrowRightIcon, DownloadIcon } from './Icons';

// Typed is a global object from the CDN script
declare const Typed: any;

const Hero: React.FC = () => {
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedEl.current) return;

    const options = {
      strings: ['ESG Performance', 'Portfolio Optimization', 'Risk Management', 'Sustainable Finance'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed(typedEl.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative text-white px-4 py-24 md:py-32">
      <div className="container mx-auto grid md:grid-cols-10 gap-8 items-center max-w-7xl">
        <div className="md:col-span-6 text-center md:text-left">
          <span data-aos="fade-up" className="inline-block bg-white/20 text-sm font-semibold py-1 px-4 rounded-full border border-white/30 mb-4">
            Assistant Professor | PhD Scholar
          </span>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
            Dr. Syamraj <span className="gradient-text">KP</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-lg lg:text-xl text-blue-200 max-w-2xl mx-auto md:mx-0">
            Computational Finance Expert | Financial Risk Management Specialist
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="mt-6 text-lg text-blue-100 flex items-center justify-center md:justify-start gap-2">
            <span>Researching:</span>
            <span ref={typedEl} className="font-semibold text-white"></span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4" data-aos="fade-up" data-aos-delay="400">
             <div className="stat-item glass-card py-4 px-6 text-center transition-transform hover:-translate-y-2">
              <span className="stat-number block text-3xl font-bold text-white">15+</span>
              <span className="stat-label block text-sm text-blue-200">Years Experience</span>
            </div>
             <div className="stat-item glass-card py-4 px-6 text-center transition-transform hover:-translate-y-2">
              <span className="stat-number block text-3xl font-bold text-white">3</span>
              <span className="stat-label block text-sm text-blue-200">Major Publications</span>
            </div>
             <div className="stat-item glass-card py-4 px-6 text-center transition-transform hover:-translate-y-2">
              <span className="stat-number block text-3xl font-bold text-white">5+</span>
              <span className="stat-label block text-sm text-blue-200">Research Areas</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4" data-aos="fade-up" data-aos-delay="500">
            <a href="#research" className="glass-button btn-primary flex items-center gap-2 px-8 py-3.5 text-base font-semibold w-full sm:w-auto justify-center">
              <span>View Research</span>
              <ArrowRightIcon />
            </a>
            <a href="#" className="glass-button btn-secondary flex items-center gap-2 px-8 py-3.5 text-base font-semibold w-full sm:w-auto justify-center bg-white/10 hover:bg-white/20">
              <span>Download CV</span>
              <DownloadIcon />
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center items-center relative" data-aos="zoom-in" data-aos-delay="200">
          <div className="profile-container glass-card p-2 rounded-[20px] w-64 h-64 sm:w-80 sm:h-80 relative">
            <img src="https://lead.ac.in/wp-content/uploads/2024/03/Syam-1152x1536.jpg" alt="Dr. Syamraj KP" className="profile-image w-full h-full object-cover rounded-[14px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
