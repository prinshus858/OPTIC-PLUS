
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    brand: 'OPTIK PLUS',
    home: 'Home',
    about: 'About',
    services: 'Services',
    reviews: 'Reviews',
    gallery: 'Gallery',
    contact: 'Contact',
    heroTitle: 'Your Vision, Our Precision',
    heroSubtitle: 'Vast variety of premium eyewear at best rates in Gomti Nagar, Lucknow. 3.9⭐ from 7 reviews',
    callNow: 'Call Now',
    whatsappUs: 'WhatsApp Us',
    getDirections: 'Get Directions',
    bookAppointment: 'Book Appointment',
    designerGlasses: 'Designer Eyeglasses',
    contactLenses: 'Contact Lenses',
    eyeCheckups: 'Eye Checkups',
    sunglasses: 'Sunglasses',
    writeReview: 'Write a Review',
    aboutTitle: 'Expert Opticians in Lucknow',
  },
  hi: {
    brand: 'ऑप्टिक प्लस',
    home: 'मुख्य',
    about: 'हमारे बारे में',
    services: 'सेवाएं',
    reviews: 'समीक्षाएं',
    gallery: 'गैलरी',
    contact: 'संपर्क',
    heroTitle: 'आपकी दृष्टि, हमारी सटीकता',
    heroSubtitle: 'गोमती नगर, लखनऊ में सर्वोत्तम दरों पर प्रीमियम चश्मों की विशाल विविधता। 7 समीक्षाओं से 3.9⭐',
    callNow: 'अभी कॉल करें',
    whatsappUs: 'व्हाट्सएप करें',
    getDirections: 'रास्ता देखें',
    bookAppointment: 'अपॉइंटमेंट बुक करें',
    designerGlasses: 'डिजाइनर चश्मा',
    contactLenses: 'कॉन्टेक्ट लेंस',
    eyeCheckups: 'आंखों की जांच',
    sunglasses: 'धूप का चश्मा',
    writeReview: 'समीक्षा लिखें',
    aboutTitle: 'लखनऊ में विशेषज्ञ ऑप्टिशियन',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
