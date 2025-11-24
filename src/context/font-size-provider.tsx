"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl';

interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>('base');

  useEffect(() => {
    const storedFontSize = localStorage.getItem('fontSize') as FontSize;
    if (storedFontSize && ['sm', 'base', 'lg', 'xl', '2xl'].includes(storedFontSize)) {
      setFontSize(storedFontSize);
    }
  }, []);

  useEffect(() => {
    // Remove all possible font-size classes
    document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl');
    // Add the current font-size class
    document.documentElement.classList.add(`text-${fontSize}`);
    // Store the preference
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
}
