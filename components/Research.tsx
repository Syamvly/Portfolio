
import React from 'react';
import { BookOpenIcon, CheckIcon, DownloadIcon, FileTextIcon, LinkIcon, ResearchIcon } from './Icons';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block bg-[#DBEAFE] text-[#1E3A8A] text-xs font-bold py-1.5 px-3 rounded-full mb-3">Research & Publications</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">Advancing Financial Knowledge</h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto">Peer-reviewed research published in international journals</p>
        </div>

        {/* Featured Publication */}
        <div className="featured-publication glass-card p-6 md:p-8 lg:p-12 relative mb-12" data-aos="fade-up">
          <div className="absolute top-4 right-4 bg-[#F59E0B] text-white text-xs font-bold py-1 px-3 rounded-full">Featured Research</div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="publication-content">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#111827] leading-tight mb-3 font-academic">
                  Advancing Understanding of ESG Score and Executive Compensation Relationships in the Indian Context
                </h3>
                <div className="authors text-sm text-[#9CA3AF] mb-4">
                  <span className="author">Ranjitha Ajay</span><span className="mx-2">•</span>
                  <span className="author">Surendranath Rakesh Jory</span><span className="mx-2">•</span>
                  <span className="author font-semibold text-[#1E3A8A]">K.P. Syamraj</span>
                </div>
                <p className="abstract text-[#1F2937] leading-relaxed mb-6">
                  This groundbreaking empirical study examines the impact of ESG performance metrics on executive compensation in India. Our findings reveal that higher ESG scores are positively associated with higher executive compensation, particularly in business-group affiliated firms and environmentally sensitive industries.
                </p>
                <div className="key-findings mb-6">
                  <h4 className="text-lg font-bold text-[#111827] mb-3">Key Findings</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-[#1F2937]"><CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /><span>Positive correlation between ESG performance and executive pay.</span></li>
                    <li className="flex items-start gap-2 text-[#1F2937]"><CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /><span>Business-group affiliations amplify ESG-compensation link.</span></li>
                    <li className="flex items-start gap-2 text-[#1F2937]"><CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /><span>Governance pillar shows strongest impact in sensitive industries.</span></li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="glass-button bg-[#3B82F6] hover:bg-[#1E3A8A] text-white flex items-center gap-2 px-4 py-2 text-sm font-semibold"><DownloadIcon className="w-4 h-4" /><span>Download PDF</span></button>
                  <button className="glass-button bg-white/50 hover:bg-white/80 text-[#1F2937] flex items-center gap-2 px-4 py-2 text-sm font-semibold"><LinkIcon className="w-4 h-4" /><span>View on Publisher</span></button>
                </div>
              </div>
            </div>
            <div className="publication-visual flex flex-col gap-4">
              <div className="journal-cover glass-card-dark p-6 text-center text-white">
                  <div className="text-xl font-bold">Global Finance Journal</div>
                  <div className="text-sm opacity-80"><span>Elsevier</span><span className="mx-2">•</span><span>Volume 62, 2024</span></div>
              </div>
              <div className="publication-metrics space-y-3">
                  <div className="metric glass-card p-3 text-sm text-center">DOI: 10.1016/j.gfj.2024.100993</div>
                  <div className="metric glass-card p-3 text-sm text-center">SSRN Indexed</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="publication-card glass-card p-6 flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <div className="publication-type-badge text-xs font-bold text-blue-600 bg-blue-100 inline-block py-1 px-3 rounded-full self-start mb-4">Book</div>
            <div className="flex-grow">
              <BookOpenIcon className="w-10 h-10 text-[#3B82F6] mb-4" />
              <h4 className="text-lg font-bold text-[#111827] mb-2 font-academic">Monte Carlo Simulation for Data-Informed Investment Nudges</h4>
              <p className="text-sm text-[#9CA3AF] mb-4">K.P. Syamraj</p>
              <p className="text-sm text-[#1F2937] leading-relaxed">Comprehensive guide to implementing Monte Carlo simulation techniques for investment decision-making.</p>
            </div>
            <button className="glass-button bg-white/50 hover:bg-white/80 text-[#1F2937] w-full mt-6 py-2.5 text-sm font-semibold">Learn More</button>
          </div>
          
          <div className="publication-card glass-card p-6 flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <div className="publication-type-badge text-xs font-bold text-emerald-600 bg-emerald-100 inline-block py-1 px-3 rounded-full self-start mb-4">Research Thesis</div>
             <div className="flex-grow">
                <FileTextIcon className="w-10 h-10 text-emerald-500 mb-4" />
                <h4 className="text-lg font-bold text-[#111827] mb-2 font-academic">Impacts of Currency Demonetization on NSE Sectoral Indices</h4>
                <p className="text-sm text-[#9CA3AF] mb-4">K.P. Syamraj • M.Phil Thesis</p>
                <p className="text-sm text-[#1F2937] leading-relaxed">Event study analysis examining the impact of India's 2016 demonetization policy on NSE sectoral indices.</p>
             </div>
            <button className="glass-button bg-white/50 hover:bg-white/80 text-[#1F2937] w-full mt-6 py-2.5 text-sm font-semibold">View Abstract</button>
          </div>
          
          <div className="publication-card glass-card p-6 flex flex-col items-center justify-center text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="coming-badge text-xs font-bold text-gray-600 bg-gray-100 py-1 px-3 rounded-full mb-4">Coming Soon</div>
            <ResearchIcon className="w-10 h-10 text-gray-400 mb-4" />
            <p className="text-sm text-[#9CA3AF]">Additional research papers currently under review and in development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
