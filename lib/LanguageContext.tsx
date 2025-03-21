'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTranslations } from './i18n';

type LanguageContextType = {
  locale: string;
  translations: any;
  setLocale: (locale: string) => void;
};

const defaultContext: LanguageContextType = {
  locale: 'es', // Default to Spanish
  translations: getTranslations('es'),
  setLocale: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<string>('es'); // Default to Spanish
  const [translations, setTranslations] = useState(getTranslations('es'));

  useEffect(() => {
    // On client-side, try to get locale from localStorage
    const savedLocale = localStorage.getItem('locale') || 'es';
    if (savedLocale !== locale) {
      setLocaleState(savedLocale);
      setTranslations(getTranslations(savedLocale));
    }
  }, [locale]);

  const handleSetLocale = (newLocale: string) => {
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
    setTranslations(getTranslations(newLocale));
    // Force reload for complete language update
    // window.location.reload();
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        translations,
        setLocale: handleSetLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}; 