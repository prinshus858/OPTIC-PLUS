
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Glasses, Eye, Contact as ContactIcon, SunMedium } from 'lucide-react';

interface ServicesProps {
  onBookNow: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookNow }) => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('designerGlasses'),
      icon: <Glasses className="w-10 h-10" />,
      desc: 'Exclusive range of international and luxury brands to fit every style.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: t('contactLenses'),
      icon: <ContactIcon className="w-10 h-10" />,
      desc: 'Soft, daily, and breathable contact lenses for all-day comfort.',
      color: 'from-emerald-400 to-teal-600'
    },
    {
      title: t('eyeCheckups'),
      icon: <Eye className="w-10 h-10" />,
      desc: 'State-of-the-art computerized eye testing by qualified professionals.',
      color: 'from-amber-400 to-orange-500'
    },
    {
      title: t('sunglasses'),
      icon: <SunMedium className="w-10 h-10" />,
      desc: 'Premium UV protection and trendy designs for sun protection.',
      color: 'from-rose-400 to-red-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Our Professional Services
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Providing comprehensive eye care solutions since inception. Experience quality and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-neu-light dark:shadow-neu-dark border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform shadow-lg shadow-blue-500/20`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
                {service.desc}
              </p>
              <button 
                onClick={onBookNow}
                className="mt-auto w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary-start hover:text-white font-bold transition-all"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
