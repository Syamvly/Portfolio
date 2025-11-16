
import React from 'react';
import { DownloadIcon, LinkedinIcon, ArrowRightIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-20 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="footer-content glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="footer-about">
              <h3 className="text-2xl font-bold mb-3">Dr. Syamraj KP</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                Assistant Professor specializing in Computational Finance and Financial Risk Management.
              </p>
              <button className="glass-button bg-white/20 hover:bg-white/30 text-white flex items-center gap-2 px-4 py-2 text-sm font-semibold">
                <DownloadIcon className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
            
            <div className="footer-links">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-blue-200 hover:text-white">About</a></li>
                <li><a href="#research" className="text-blue-200 hover:text-white">Research</a></li>
                <li><a href="#skills" className="text-blue-200 hover:text-white">Skills</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-research">
              <h4 className="text-lg font-bold mb-4">Research Areas</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-blue-200">Computational Finance</li>
                <li className="text-blue-200">ESG & Sustainable Finance</li>
                <li className="text-blue-200">Risk Management</li>
                <li className="text-blue-200">Portfolio Optimization</li>
              </ul>
            </div>
            
            <div className="footer-newsletter">
              <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
              <p className="text-blue-200 text-sm mb-3">Subscribe for research updates.</p>
              <form className="flex items-center">
                <input type="email" placeholder="Your email" className="glass-input text-white bg-black/20 placeholder-blue-300 flex-grow p-2.5 text-sm rounded-l-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                <button type="submit" className="glass-button bg-[#3B82F6] hover:bg-[#1E3A8A] p-2.5 rounded-r-lg">
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
            <p className="text-blue-200">&copy; 2024 Dr. Syamraj KP. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a href="#" className="text-blue-200 hover:text-white"><LinkedinIcon/></a>
              {/* Add other social icons here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
