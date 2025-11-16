
import React from 'react';
import { BriefcaseIcon, LightbulbIcon } from './Icons';

const Experience: React.FC = () => {
  const courses = [
    'Financial Risk Management', 'Computational Finance', 'Portfolio Management',
    'Financial Analytics', 'Quantitative Methods', 'Python for Finance', 'R Programming'
  ];

  return (
    <section id="experience" className="py-20 md:py-28 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-white/20 text-xs font-bold py-1.5 px-3 rounded-full mb-3">Professional Experience</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Teaching & Research Journey</h2>
        </div>

        <div className="space-y-12">
          {/* Current Position */}
          <div className="experience-card glass-card-dark p-6 md:p-8 relative" data-aos="fade-up">
            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold py-1 px-3 rounded-full">Current Position</div>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-4">
              <div className="company-logo glass-card p-3 flex-shrink-0">
                <BriefcaseIcon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Assistant Professor</h3>
                <p className="text-lg text-blue-200">LEAD College of Management</p>
                <p className="text-sm text-blue-300">Dhoni, Palakkad, Kerala, India • March 2024 - Present</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Leading financial analytics and risk management instruction for MBA students. Conducting advanced research in computational finance and sustainable investment strategies.
            </p>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Courses Taught</h4>
              <div className="flex flex-wrap gap-2">
                {courses.map(course => (
                  <span key={course} className="bg-white/20 text-white text-sm font-medium py-1 px-3 rounded-full">{course}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Previous Experience */}
          <div className="experience-card glass-card p-6 md:p-8" data-aos="fade-up">
            <div className="flex items-start gap-6">
                <div className="experience-icon bg-white/20 p-4 rounded-xl flex-shrink-0">
                   <BriefcaseIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Assistant Professor (Various Institutions)</h3>
                  <p className="text-base text-blue-200">15+ Years Combined Experience</p>
                  <p className="mt-3 text-blue-100 leading-relaxed">
                    Extensive teaching career spanning multiple premier institutions across Kerala. Specialized in commerce, finance, and quantitative methods.
                  </p>
                </div>
            </div>
          </div>
          
          {/* Teaching Philosophy */}
          <div className="teaching-philosophy glass-card p-6 md:p-8" data-aos="fade-up">
            <div className="text-center mb-6">
                <LightbulbIcon className="w-10 h-10 text-amber-300 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white">Teaching Philosophy</h3>
            </div>
            <blockquote className="text-center text-lg italic text-blue-100 border-l-4 border-amber-400 pl-6 py-2 mb-8 max-w-3xl mx-auto">
              "I believe in bridging the gap between theoretical finance and practical application. My methodology emphasizes hands-on experience with Python and R, real-world case studies, and developing critical thinking skills."
            </blockquote>
             <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="pillar glass-card-dark p-4">
                    <h5 className="font-bold text-white">Practical Application</h5>
                    <p className="text-sm text-blue-200">Real-world projects and industry cases</p>
                </div>
                <div className="pillar glass-card-dark p-4">
                    <h5 className="font-bold text-white">Technical Excellence</h5>
                    <p className="text-sm text-blue-200">Hands-on programming and modeling</p>
                </div>
                <div className="pillar glass-card-dark p-4">
                    <h5 className="font-bold text-white">Critical Thinking</h5>
                    <p className="text-sm text-blue-200">Analytical problem-solving skills</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
