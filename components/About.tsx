
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Award, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <ShieldCheck className="text-primary-start" />, label: 'Genuine Quality', desc: '100% Authentic Brands' },
    { icon: <Clock className="text-primary-start" />, label: 'Fast Delivery', desc: 'Same Day Processing' },
    { icon: <Star className="text-primary-start" />, label: 'Expert Service', desc: 'Professional Consultation' },
    { icon: <Award className="text-primary-start" />, label: 'Best Rates', desc: 'In Gomti Nagar' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800" 
              alt="Shop Interior 1" 
              className="rounded-3xl shadow-neu-light dark:shadow-neu-dark w-full aspect-square object-cover"
            />
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800" 
              alt="Eyeglasses collection" 
              className="rounded-3xl shadow-neu-light dark:shadow-neu-dark w-full aspect-[3/4] object-cover translate-y-8"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-primary-start rounded-3xl p-8 flex flex-col justify-end text-white"
            >
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="opacity-80">Years of Experience in Eye Care</p>
            </motion.div>
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              src="https://images.unsplash.com/photo-1511732351157-1875f1d096a5?auto=format&fit=crop&q=80&w=800" 
              alt="Modern Storefront" 
              className="rounded-3xl shadow-neu-light dark:shadow-neu-dark w-full aspect-square object-cover"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent font-bold uppercase tracking-widest mb-4">{t('about')}</h2>
            <h3 className="text-4xl font-heading font-bold mb-6">{t('aboutTitle')}</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Located at the <strong>petrol pump, 1/418, beside Shaheed Chandrashekhar Azad Chowk, Viram Khand, Gomti Nagar</strong>. 
              We are Lucknow's premier destination for high-end eyewear. Whether you're looking for designer frames, professional eye testing, 
              or daily contact lenses, our expert opticians ensure you see and look your best.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-start/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{stat.label}</h4>
                    <p className="text-slate-500 text-sm">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
              <p className="italic text-slate-700 dark:text-slate-300">
                "Excellent service and a vast variety of collections. Best rates in Gomti Nagar. Strongly recommended by locals!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
