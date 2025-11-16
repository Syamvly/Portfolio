
import React, { useState, useEffect } from 'react';
import { DownloadIcon, MenuIcon, XIcon } from './Icons';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Research', href: '#research' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      let currentSection = 'home';
      
      sections.forEach(section => {
        if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinkClasses = (href: string) => 
    `relative py-2 px-3 rounded-full transition-colors duration-300 ${
      activeSection === href.substring(1) 
      ? `text-white ${isScrolled ? 'bg-blue-500' : 'bg-white/20'}` 
      : `${isScrolled ? 'text-[#111827]' : 'text-white'} hover:text-[#60A5FA]`
    }`;

  const mobileNavLinkClasses = (href: string) => 
    `block py-3 px-4 text-lg rounded-lg ${
      activeSection === href.substring(1) 
      ? 'bg-[#1E3A8A] text-white' 
      : 'text-white hover:bg-[#1E3A8A]/50'
    }`;

  return (
    <>
      <header 
        className={`fixed top-3 md:top-5 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] md:w-[calc(100%-80px)] max-w-6xl z-50 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-md' 
          : 'bg-white/15 backdrop-blur-xl border border-white/30'
        } rounded-2xl`
      }>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#home" className={`text-2xl font-bold ${isScrolled ? 'text-[#0A2463]' : 'text-white'}`}>
                Dr. Syamraj KP
              </a>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={navLinkClasses(link.href)}>
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:block">
              <a href="#" className="glass-button flex items-center gap-2 px-5 py-2.5 text-white font-medium text-sm">
                <DownloadIcon className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-md ${isScrolled ? 'text-[#0A2463]' : 'text-white'}`}>
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#0A2463]/80 backdrop-blur-lg transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 p-6 space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={mobileNavLinkClasses(link.href)} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#" className="glass-button flex items-center justify-center gap-2 mt-6 py-3 text-white font-medium">
            <DownloadIcon className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
