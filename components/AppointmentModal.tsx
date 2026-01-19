
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-start to-primary-end p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl font-heading font-bold mb-2">{t('bookAppointment')}</h3>
              <p className="opacity-80">Choose your preferred date and time for a clinical eye examination.</p>
            </div>

            <form className="p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-sm font-bold ml-2 mb-2 block">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" required placeholder="John Doe" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary-start" />
                  </div>
                </div>
                <div className="relative">
                  <label className="text-sm font-bold ml-2 mb-2 block">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="tel" required placeholder="+91 88744..." className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary-start" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-sm font-bold ml-2 mb-2 block">Select Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="date" required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary-start" />
                  </div>
                </div>
                <div className="relative">
                  <label className="text-sm font-bold ml-2 mb-2 block">Select Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <select required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary-start appearance-none">
                      <option>Morning (10AM-1PM)</option>
                      <option>Afternoon (1PM-4PM)</option>
                      <option>Evening (4PM-9PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-primary-start hover:bg-primary-end text-white font-bold rounded-2xl shadow-xl hover:shadow-primary-start/40 transition-all flex items-center justify-center gap-3"
              >
                Confirm Appointment
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
