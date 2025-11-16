
import React from 'react';
import { AwardIcon, CodeIcon, GraduationCapIcon, QuoteIcon, ResearchIcon } from './Icons';

const SectionHeader: React.FC<{ badge: string; title: React.ReactNode; description: string }> = ({ badge, title, description }) => (
  <div className="text-center mb-12" data-aos="fade-up">
    <span className="inline-block bg-[#DBEAFE] text-[#1E3A8A] text-xs font-bold py-1.5 px-3 rounded-full mb-3">{badge}</span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">{title}</h2>
    <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader 
          badge="About Me"
          title={<>Academic Excellence Meets<br/>Industry Innovation</>}
          description="Bridging theoretical finance with practical computational solutions"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3 glass-card p-6 md:p-8" data-aos="fade-right">
            <p className="text-xl text-[#1F2937] leading-relaxed mb-6 font-medium">
              As an Assistant Professor specializing in Financial Risk Management and Computational Finance, I dedicate my research to developing data-informed investment strategies and sustainable finance frameworks.
            </p>
            <p className="text-base text-[#1F2937] leading-loose mb-6">
              Currently pursuing PhD in Commerce at the University of Kerala, my research focuses on the intersection of Environmental, Social, and Governance (ESG) metrics with executive compensation, portfolio optimization using Monte Carlo simulations, and market behavior analysis during economic disruptions.
            </p>
            <div className="highlight-box glass-card-dark text-white p-6 my-8">
              <QuoteIcon className="w-10 h-10 text-blue-300 mb-4" />
              <p className="text-lg italic leading-relaxed">
                "My mission is to empower traders, analysts, and investors with sophisticated mathematical models that transform complex financial data into actionable insights."
              </p>
            </div>
             <div className="flex items-start gap-4">
                <GraduationCapIcon className="w-10 h-10 text-[#3B82F6] flex-shrink-0 mt-1" />
                <div>
                    <span className="block text-sm font-semibold text-[#9CA3AF]">Current Pursuit</span>
                    <span className="block text-base font-semibold text-[#1F2937]">PhD in Commerce, University of Kerala</span>
                </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="highlight-card glass-card p-6" data-aos="fade-left" data-aos-delay="100">
              <div className="flex items-start gap-4">
                <div className="icon-wrapper bg-blue-100 p-3 rounded-xl"><ResearchIcon className="text-[#1E3A8A]" /></div>
                <div>
                  <h4 className="text-lg font-bold text-[#111827] mb-2">Research Focus</h4>
                  <ul className="space-y-1 text-[#1F2937] list-disc list-inside">
                      <li>Computational Finance</li>
                      <li>Sustainable Finance & ESG</li>
                      <li>Financial Risk Management</li>
                      <li>Portfolio Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="highlight-card glass-card p-6" data-aos="fade-left" data-aos-delay="200">
              <div className="flex items-start gap-4">
                <div className="icon-wrapper bg-emerald-100 p-3 rounded-xl"><CodeIcon className="text-emerald-700" /></div>
                 <div>
                    <h4 className="text-lg font-bold text-[#111827] mb-2">Technical Expertise</h4>
                    <ul className="space-y-1 text-[#1F2937] list-disc list-inside">
                        <li>Python & R Programming</li>
                        <li>Monte Carlo Simulation</li>
                        <li>Quantitative Analysis</li>
                        <li>Statistical Modeling</li>
                    </ul>
                 </div>
              </div>
            </div>
            <div className="highlight-card glass-card p-6" data-aos="fade-left" data-aos-delay="300">
              <div className="flex items-start gap-4">
                 <div className="icon-wrapper bg-amber-100 p-3 rounded-xl"><AwardIcon className="text-amber-600" /></div>
                 <div>
                    <h4 className="text-lg font-bold text-[#111827] mb-2">Achievements</h4>
                    <ul className="space-y-1 text-[#1F2937] list-disc list-inside">
                        <li>Global Finance Journal Publication</li>
                        <li>Monte Carlo Simulation Book</li>
                        <li>UGC NET Qualified</li>
                        <li>15+ Years Teaching</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
