
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
// Fix: Added AnimatePresence to the imports from framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Formspree/EmailJS call
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    { icon: <Phone />, label: 'Phone', value: '08874432534', link: 'tel:08874432534' },
    { icon: <Mail />, label: 'Email', value: 'info@optikplus.com', link: 'mailto:info@optikplus.com' },
    { icon: <MapPin />, label: 'Address', value: 'Shaheed Azad Chowk, Gomti Nagar', link: 'https://maps.app.goo.gl/...' },
    { icon: <Clock />, label: 'Hours', value: '10 AM - 9 PM Daily', link: null },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Info & Map */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Get In Touch</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, i) => (
                <div key={i} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-neu-light dark:shadow-neu-dark">
                  <div className="text-primary-start mb-4">{info.icon}</div>
                  <h4 className="font-bold mb-1">{info.label}</h4>
                  {info.link ? (
                    <a href={info.link} className="text-slate-500 dark:text-slate-400 hover:text-primary-start break-words">{info.value}</a>
                  ) : (
                    <p className="text-slate-500 dark:text-slate-400">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] border-8 border-white dark:border-slate-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.507421948842!2d80.9996!3d26.8533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c01994e63d%3A0xe54e1957ec5015b6!2sViram%20Khand%201%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[3rem] shadow-neu-light dark:shadow-neu-dark border border-slate-100 dark:border-slate-700 h-fit">
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-2">Name</label>
                  <input 
                    type="text" required
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-start transition-all"
                    placeholder="Your Full Name"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-2">Phone</label>
                  <input 
                    type="tel" required
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-start transition-all"
                    placeholder="+91 0000000000"
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-2">Email</label>
                <input 
                  type="email" required
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-start transition-all"
                  placeholder="name@email.com"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-2">Message</label>
                <textarea 
                  rows={4} required
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary-start transition-all resize-none"
                  placeholder="How can we help you today?"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary-start hover:bg-primary-end text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95"
              >
                Send Message <Send size={20} />
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-success/20 text-success border border-success/30 rounded-2xl text-center font-bold"
                >
                  Thank you! We'll get back to you shortly.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
