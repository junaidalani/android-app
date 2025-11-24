
"use client";

import { createContext, useState, useEffect, useContext, ReactNode, useCallback } from 'react';
import { Language } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    // This effect runs once on mount to set the initial language from localStorage
    const savedLanguage = localStorage.getItem('settings:language') as Language;
    // Ensure 'transliteration' is a valid option, otherwise default to 'ar'
    const initialLanguage = (savedLanguage && ['ar', 'en', 'transliteration'].includes(savedLanguage)) ? savedLanguage : 'ar';
    
    setLanguage(initialLanguage);
    if (initialLanguage !== 'transliteration') {
      document.documentElement.lang = initialLanguage;
      document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);

  const handleSetLanguage = useCallback((lang: Language) => {
    // No need to check if lang is different from current language, state update handles that
    setLanguage(lang);
    localStorage.setItem('settings:language', lang);

    if (lang !== 'transliteration') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
    // For 'transliteration', we might not want to change the dir, or handle it specifically
    // Assuming transliteration is LTR for now
    else {
      document.documentElement.dir = 'ltr';
    }

  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
