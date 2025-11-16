
import React from 'react';
import { GraduationCapIcon } from './Icons';

const educationData = [
  {
    date: '2024 - Present',
    title: 'PhD in Commerce',
    institution: 'University of Kerala',
    description: 'Research Focus: Computational Finance, Corporate Finance, and Sustainable Finance. Investigating ESG performance metrics, executive compensation relationships, and quantitative risk management frameworks.',
    status: 'Pursuing',
    tags: ['Computational Finance', 'ESG Research', 'Risk Management']
  },
  {
    date: 'Completed',
    title: 'M.Phil in Commerce',
    institution: 'University of Kerala',
    description: 'Advanced research in financial analytics and risk management. Thesis on Currency Demonetization impacts on NSE Sectoral Indices.',
    status: 'Completed',
    tags: []
  },
  {
    date: 'Completed',
    title: 'M.Com (Master of Commerce)',
    institution: 'University of Kerala',
    description: 'Specialized in Financial Management and Corporate Finance.',
    status: 'Completed',
    tags: []
  },
  {
    date: 'Qualified',
    title: 'UGC NET Qualified',
    institution: 'National Eligibility Test',
    description: 'Qualified for Assistant Professorship and Junior Research Fellowship in Commerce stream.',
    status: 'Qualified',
    tags: []
  }
];

const TimelineItem: React.FC<(typeof educationData)[0] & { index: number }> = ({ date, title, institution, description, status, tags, index }) => {
  const statusColors: { [key: string]: string } = {
    'Pursuing': 'bg-blue-500 text-white',
    'Completed': 'bg-emerald-500 text-white',
    'Qualified': 'bg-amber-500 text-white',
  };

  return (
    <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-start">
      <div className="md:col-span-2 text-right hidden md:block" data-aos="fade-right">
        <div className="glass-card inline-block py-2 px-4">
          <span className="font-semibold text-white">{date}</span>
        </div>
      </div>
      
      <div className="timeline-marker absolute left-0 top-1.5 md:left-1/2 md:-translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#1E3A8A] border-4 border-[#60A5FA]">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      <div className="md:col-span-3" data-aos="fade-left">
        <div className="glass-card p-6 md:p-8">
          <div className="md:hidden text-sm font-semibold text-white mb-2">{date}</div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-base text-blue-200">{institution}</p>
            </div>
            <span className={`text-xs font-bold py-1 px-3 rounded-full mt-2 sm:mt-0 ${statusColors[status] || 'bg-gray-500 text-white'}`}>
              {status}
            </span>
          </div>
          <p className="text-blue-100 text-base leading-relaxed mb-4">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="bg-white/20 text-white text-xs font-medium py-1 px-3 rounded-full">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-white/20 text-xs font-bold py-1.5 px-3 rounded-full mb-3">Education</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Academic Journey</h2>
        </div>
        
        <div className="relative space-y-12">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-white/20 rounded-full md:left-1/2 md:-translate-x-1/2"></div>
          {educationData.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
