
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Languages, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onBookNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onBookNow }) => {
  const { t, toggleLanguage, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('reviews'), href: '#reviews' },
    { name: t('gallery'), href: '#gallery' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">O+</span>
          </div>
          <span className="text-xl md:text-2xl font-heading font-extrabold bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent">
            {t('brand')}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm font-semibold hover:text-primary-start transition-colors uppercase tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-slate-300 dark:bg-slate-700" />

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center gap-2"
              title="Change Language"
            >
              <Languages size={20} />
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>
            <button 
              onClick={toggleDarkMode}
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors"
              title="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={onBookNow}
              className="bg-primary-start hover:bg-primary-end text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-primary-start/50 transition-all scale-100 hover:scale-105"
            >
              {t('bookAppointment')}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-xl border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <hr className="dark:border-slate-800" />
              <div className="flex items-center justify-between">
                <button onClick={toggleLanguage} className="flex items-center gap-2 p-3 font-semibold">
                  <Languages size={20} /> {language === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
                </button>
              </div>
              <button 
                onClick={() => {
                  onBookNow();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary-start text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} /> {t('bookAppointment')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
