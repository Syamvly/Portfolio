
import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { CodeIcon, ResearchIcon, ChartIcon, SlidersIcon, CheckIcon } from './Icons';

// Chart.js is a global object from the CDN script
declare const Chart: typeof ChartJS;
Chart.register(...registerables);

const tabs = [
  { id: 'programming', label: 'Programming', icon: <CodeIcon /> },
  { id: 'finance', label: 'Financial Analytics', icon: <ChartIcon /> },
  { id: 'research', label: 'Research Methods', icon: <ResearchIcon /> },
];

const skillsData = {
  programming: [
    { name: 'Python', level: 95, details: ['Pandas, NumPy, SciPy', 'Financial Modeling', 'Data Visualization', 'Scikit-learn'] },
    { name: 'R Programming', level: 92, details: ['Statistical Analysis', 'Time Series Analysis', 'Financial Econometrics', 'ggplot2'] },
  ],
  finance: [
    { name: 'Portfolio Management', description: 'Advanced portfolio optimization, asset allocation, and rebalancing strategies.', tags: ['MPT', 'Sharpe Ratio', 'VaR'] },
    { name: 'Risk Management', description: 'Comprehensive risk assessment, stress testing, and non-Gaussian distribution modeling.', tags: ['CVaR', 'Stress Testing', 'GARCH'] },
    { name: 'Sustainable Finance', description: 'Analysis of ESG factors, impact investing, and sustainable investment frameworks.', tags: ['ESG Integration', 'Impact Metrics'] },
  ],
  research: [
    { name: 'Monte Carlo Simulation', description: 'Advanced stochastic modeling for asset pricing and risk analysis.' },
    { name: 'Event Study Methodology', description: 'Analysis of market reactions to corporate and economic events.' },
    { name: 'Econometric Modeling', description: 'Time series analysis and regression models for financial data.' },
  ],
};

const SkillBar: React.FC<{ name: string; level: number; details: string[] }> = ({ name, level, details }) => {
    return (
        <div className="skill-card glass-card p-6">
            <h4 className="text-lg font-bold text-[#111827] mb-2">{name}</h4>
            <div className="w-full bg-black/10 rounded-full h-2.5 mb-3">
                <div className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
            </div>
            <ul className="text-sm text-[#1F2937] space-y-1 mt-4">
                {details.map(d => <li key={d} className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-emerald-500" />{d}</li>)}
            </ul>
        </div>
    );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('programming');
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
          chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Programming', 'Financial Analytics', 'Research Methods', 'Quantitative Analysis', 'Risk Management'],
            datasets: [{
              label: 'Expertise Level',
              data: [93, 90, 88, 92, 85],
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(59, 130, 246, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
                grid: { color: 'rgba(255, 255, 255, 0.2)' },
                pointLabels: { color: '#FFFFFF', font: { size: 12, family: "'Inter', sans-serif" } },
                ticks: {
                  color: '#FFFFFF',
                  backdropColor: 'transparent',
                  stepSize: 20
                },
                suggestedMin: 0,
                suggestedMax: 100
              }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
          }
        });
      }
    }
    return () => {
      if(chartInstance.current) {
        chartInstance.current.destroy();
      }
    }
  }, []);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block bg-[#DBEAFE] text-[#1E3A8A] text-xs font-bold py-1.5 px-3 rounded-full mb-3">Skills & Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">Technical Proficiency</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="skills-tabs glass-card flex flex-wrap justify-center p-2 mb-8" data-aos="fade-up">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id ? 'bg-[#3B82F6] text-white shadow-md' : 'text-[#1F2937] hover:bg-black/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="skills-content">
              {activeTab === 'programming' && (
                <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
                  {skillsData.programming.map(skill => <SkillBar key={skill.name} {...skill} />)}
                </div>
              )}
              {activeTab === 'finance' && (
                <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
                  {skillsData.finance.map(skill => (
                    <div key={skill.name} className="glass-card p-6">
                      <h4 className="text-lg font-bold text-[#111827] mb-2">{skill.name}</h4>
                      <p className="text-sm text-[#1F2937] leading-relaxed mb-4">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.tags.map(tag => <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium py-1 px-2.5 rounded-full">{tag}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'research' && (
                 <div className="space-y-4" data-aos="fade-up">
                  {skillsData.research.map(skill => (
                    <div key={skill.name} className="glass-card p-4 flex items-center gap-4">
                      <div className="bg-emerald-100 p-3 rounded-lg"><CheckIcon className="w-5 h-5 text-emerald-600" /></div>
                      <div>
                        <h4 className="font-semibold text-[#111827]">{skill.name}</h4>
                        <p className="text-sm text-[#9CA3AF]">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="skills-visualization glass-card-dark p-6" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Expertise Distribution</h3>
            <div className="relative h-64 md:h-80">
                <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
