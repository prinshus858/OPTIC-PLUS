
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center">
                <span className="text-white font-bold text-xl">O+</span>
              </div>
              <span className="text-3xl font-heading font-extrabold bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent">
                {t('brand')}
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Premium eyewear at unbeatable prices. Providing the residents of Lucknow with top-notch 
              optometry services and international brand collections since decades.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-lg flex items-center justify-center hover:text-primary-start transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#home" className="hover:text-primary-start transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-start transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary-start transition-colors">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-primary-start transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Visit Us</h4>
            <p className="text-slate-500 mb-2">1/418, beside Shaheed Azad Chowk,</p>
            <p className="text-slate-500 mb-2">Viram Khand, Gomti Nagar,</p>
            <p className="text-slate-500 mb-6">Lucknow, UP 226010</p>
            <p className="font-bold text-success">Open Daily 10 AM - 9 PM</p>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Optik Plus. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Powered by Optik Plus Team <Heart size={16} className="text-red-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};
