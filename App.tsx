
import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-slate-950', 'text-white');
      document.body.classList.remove('bg-slate-50', 'text-slate-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-slate-50', 'text-slate-900');
      document.body.classList.remove('bg-slate-950', 'text-white');
    }
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-primary-start selection:text-white overflow-x-hidden">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onBookNow={openModal} />
        
        <main>
          <Hero onBookNow={openModal} />
          <About />
          <Services onBookNow={openModal} />
          <Reviews />
          <Gallery />
          <Contact />
        </main>

        <Footer />
        <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
        
        {/* Sticky WhatsApp Floating Button */}
        <a
          href="https://wa.me/918874432534"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 p-4 bg-success text-white rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce hover:animate-none group"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.941-.708-1.797 0-.855.448-1.274.607-1.446.16-.171.347-.214.464-.214.117 0 .234.005.336.011.107.005.252-.04.394.303.144.35.494 1.205.536 1.29.042.085.07.184.013.298-.057.115-.085.187-.171.284-.085.099-.178.221-.253.296-.085.085-.174.178-.075.35.099.171.439.724.944 1.175.649.582 1.196.762 1.367.847.171.085.271.071.371-.043.1-.115.426-.499.541-.67.114-.171.228-.142.384-.085.157.057.997.469 1.168.555.171.085.284.128.327.201.043.073.043.419-.101.824z" />
          </svg>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp Us
          </span>
        </a>
      </div>
    </LanguageProvider>
  );
};

export default App;
