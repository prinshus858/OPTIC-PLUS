
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export const Hero: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 scroll-mt-20">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1511732351157-1875f1d096a5?auto=format&fit=crop&q=80&w=2000" 
          alt="Optik Plus Interior" 
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-6 leading-tight">
            <span className="block text-accent drop-shadow-[0_0_15px_rgba(252,211,77,0.5)]">
              {t('brand')}
            </span>
            <span className="block mt-2">{t('heroTitle')}</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a 
              href="tel:08874432534"
              className="flex items-center gap-3 bg-success hover:bg-emerald-600 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl animate-pulse hover:animate-none"
            >
              <Phone size={24} /> {t('callNow')}
            </a>
            
            <a 
              href="https://wa.me/918874432534"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <MessageCircle size={24} className="text-success" /> {t('whatsappUs')}
            </a>

            <a 
              href="https://maps.app.goo.gl/YourGoogleMapsLink"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary-start hover:bg-primary-end px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <MapPin size={24} /> {t('getDirections')}
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <svg key={i} className={`w-6 h-6 fill-current ${i === 4 ? 'opacity-50' : ''}`} viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="text-white font-bold ml-2">3.9/5 (7 Local Reviews)</span>
          </div>
        </motion.div>
      </div>

      {/* Neumorphic Shape Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};
