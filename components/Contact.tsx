
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Let's Discuss Your Project</h3>
            <p className="text-slate-600 text-lg mb-12">
              Ready to give your space a fresh look? Reach out today for a consultation and free quote. We're here to help you make the right choice.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-slate-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-slate-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">hello@gppintura.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-slate-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600">123 Painting Way, Design District, FL 33101</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xl mb-1">Follow Our Journey</h4>
                <p className="text-slate-400 text-sm">See daily updates on Instagram</p>
              </div>
              <a 
                href="https://www.instagram.com/gppintura/" 
                target="_blank" 
                rel="noreferrer"
                className="w-14 h-14 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-orange-500/20"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Type</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option>Residential Painting</option>
                  <option>Commercial Painting</option>
                  <option>Specialty Coatings</option>
                  <option>Cabinet Refinishing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project goals..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full group bg-orange-500 text-white font-bold py-5 rounded-xl text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20">
                Send Request
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-slate-500 text-sm">
                Average response time: <span className="text-orange-500 font-semibold">Under 2 hours</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
