
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: 'Paarth Singh',
    stars: 5,
    text: 'Amazing experience. Very humble people. Will strongly recommend to all who are reading this.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Paarth'
  },
  {
    name: 'Tejusv Misra',
    stars: 5,
    text: 'Excellent shop and huge variety of lenses and sunglasses collection. Best rates in whole Gomti Nagar.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tejusv'
  },
  {
    name: 'Khushi Dhawan',
    stars: 1,
    text: 'Very bad experience regarding eye testing. Do not recommend for prescription lenses.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khushi'
  },
  {
    name: 'Vikram Sahai',
    stars: 4,
    text: 'Good collection of frames. Staff is very professional and helps you pick the right fit.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram'
  }
];

export const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-slate-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Customer Reviews</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-yellow-500">
                {[1,2,3,4].map(i => <Star key={i} fill="currentColor" size={24} />)}
                <Star size={24} className="opacity-50" />
              </div>
              <span className="text-2xl font-bold">3.9/5.0</span>
              <span className="text-slate-400">| 7 Google Reviews</span>
            </div>
          </div>
          <a 
            href="https://search.google.com/local/writereview?placeid=YourPlaceID"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
          >
            {t('writeReview')} <ExternalLink size={20} />
          </a>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-neu-light dark:shadow-neu-dark"
            >
              <div className="flex-shrink-0 relative">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-700 shadow-xl">
                  <img src={reviews[activeIndex].avatar} alt={reviews[activeIndex].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary-start p-4 rounded-2xl text-white shadow-lg">
                  <Quote size={24} fill="currentColor" />
                </div>
              </div>

              <div className="flex-grow text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={24} fill={i < reviews[activeIndex].stars ? "currentColor" : "none"} className={i >= reviews[activeIndex].stars ? "text-slate-300" : ""} />
                  ))}
                </div>
                <p className="text-xl md:text-3xl font-medium leading-relaxed italic mb-8 dark:text-slate-200">
                  "{reviews[activeIndex].text}"
                </p>
                <h4 className="text-2xl font-bold text-primary-start">{reviews[activeIndex].name}</h4>
                <p className="text-slate-400">Verified Customer</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
            <button onClick={prev} className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:text-primary-start transition-colors"><ChevronLeft /></button>
            <button onClick={next} className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:text-primary-start transition-colors"><ChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
