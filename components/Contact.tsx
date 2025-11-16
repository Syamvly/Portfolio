
import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon, LinkedinIcon } from './Icons';

const Contact: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert('Thank you for your message!');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block bg-[#DBEAFE] text-[#1E3A8A] text-xs font-bold py-1.5 px-3 rounded-full mb-3">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">Let's Collaborate</h2>
          <p className="mt-4 text-lg text-[#9CA3AF] max-w-2xl mx-auto">Open to research collaborations, consulting projects, and academic discussions</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
            <div className="info-card glass-card p-6 flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl"><MapPinIcon className="text-[#1E3A8A]" /></div>
              <div>
                <h4 className="font-bold text-[#111827]">Office Address</h4>
                <p className="text-sm text-[#1F2937]">LEAD College of Management<br/>Dhoni PO, Palakkad<br/>Kerala, India - 678009</p>
              </div>
            </div>
            <div className="info-card glass-card p-6 flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl"><MailIcon className="text-emerald-700" /></div>
              <div>
                <h4 className="font-bold text-[#111827]">Email</h4>
                <a href="mailto:syamraj@lead.ac.in" className="text-sm text-[#1F2937] hover:text-[#3B82F6] transition">syamraj@lead.ac.in</a>
              </div>
            </div>
             <div className="info-card glass-card p-6 flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-xl"><PhoneIcon className="text-amber-600" /></div>
              <div>
                <h4 className="font-bold text-[#111827]">Phone</h4>
                <p className="text-sm text-[#1F2937]">+91 9497713693</p>
              </div>
            </div>
             <div className="social-links mt-8">
                <h4 className="font-bold text-[#111827] mb-3 text-lg">Connect Online</h4>
                <div className="flex items-center gap-3">
                    <a href="#" className="social-btn glass-button p-3 text-[#1F2937] hover:bg-white/50"><LinkedinIcon className="w-5 h-5"/></a>
                    {/* Add other social icons here */}
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 glass-card p-8" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-2">Full Name</label>
                <input type="text" id="name" className="form-input glass-input w-full p-3 text-[#111827]" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-[#1F2937] mb-2">Email Address</label>
                <input type="email" id="email" className="form-input glass-input w-full p-3 text-[#111827]" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="block text-sm font-medium text-[#1F2937] mb-2">Subject</label>
                <select id="subject" className="form-input glass-input w-full p-3 text-[#111827] appearance-none">
                  <option>Research Collaboration</option>
                  <option>Consulting Project</option>
                  <option>Academic Query</option>
                  <option>Speaking Invitation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-[#1F2937] mb-2">Message</label>
                <textarea id="message" rows={5} className="form-input glass-input w-full p-3 text-[#111827]" required></textarea>
              </div>
              <button type="submit" className="glass-button bg-[#3B82F6] hover:bg-[#1E3A8A] text-white w-full py-3.5 flex items-center justify-center gap-2 font-semibold">
                <span>Send Message</span>
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
