"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export interface CustomColors {
  background: string;
  mainText: string;
  otherText: string;
  elements: string;
}

interface CustomThemeContextType {
  customColors: CustomColors;
  setCustomColors: (colors: CustomColors) => void;
}

const CustomThemeContext = createContext<CustomThemeContextType | undefined>(undefined);

export function useCustomTheme() {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider');
  }
  return context;
}

const defaultColors: CustomColors = {
  background: '#ffffff',
  mainText: '#000000',
  otherText: '#000000',
  elements: '#3b82f6',
};

function hexToHSL(hex: string) {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}

export function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [customColors, setCustomColors] = useState<CustomColors>(defaultColors);

  useEffect(() => {
    const savedColors = localStorage.getItem('custom-theme-colors');
    if (savedColors) {
      setCustomColors(JSON.parse(savedColors));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('custom-theme-colors', JSON.stringify(customColors));
    const root = document.documentElement;

    if (theme === 'custom') {
      const bgHsl = hexToHSL(customColors.background);
      const textHsl = hexToHSL(customColors.mainText);
      const elementsHsl = hexToHSL(customColors.elements);
      const otherTextHsl = hexToHSL(customColors.otherText);

      const [bgH, bgS, bgL] = bgHsl.split(' ').map(v => parseInt(v));
      const [textH, textS, textL] = textHsl.split(' ').map(v => parseInt(v));
      const [elementsH, elementsS, elementsL] = elementsHsl.split(' ').map(v => parseInt(v));

      root.style.setProperty('--background', bgHsl);
      root.style.setProperty('--foreground', textHsl);
      
      root.style.setProperty('--card', bgHsl);
      root.style.setProperty('--card-foreground', textHsl);

      root.style.setProperty('--popover', bgHsl);
      root.style.setProperty('--popover-foreground', textHsl);

      root.style.setProperty('--primary', elementsHsl);
      const primaryFg = bgL > 50 ? '0 0% 0%' : '0 0% 100%'; // Simple black/white contrast
      root.style.setProperty('--primary-foreground', primaryFg);

      const secondaryL = bgL > 50 ? Math.max(0, bgL - 10) : Math.min(100, bgL + 10);
      root.style.setProperty('--secondary', `${bgH} ${bgS}% ${secondaryL}%`);
      root.style.setProperty('--secondary-foreground', textHsl);

      const mutedL = bgL > 50 ? Math.max(0, bgL - 5) : Math.min(100, bgL + 5);
      root.style.setProperty('--muted', `${bgH} ${bgS}% ${mutedL}%`);
      root.style.setProperty('--muted-foreground', otherTextHsl);

      const accentL = elementsL > 50 ? Math.max(0, elementsL - 10) : Math.min(100, elementsL + 10);
      root.style.setProperty('--accent', `${elementsH} ${elementsS}% ${accentL}%`);
      root.style.setProperty('--accent-foreground', textHsl);

      root.style.setProperty('--destructive', '0 84.2% 60.2%');
      root.style.setProperty('--destructive-foreground', '0 0% 98%');

      const borderL = bgL > 50 ? Math.max(0, bgL - 15) : Math.min(100, bgL + 15);
      root.style.setProperty('--border', `${bgH} ${bgS}% ${borderL}%`);
      const inputL = bgL > 50 ? Math.max(0, bgL - 12) : Math.min(100, bgL + 12);
      root.style.setProperty('--input', `${bgH} ${bgS}% ${inputL}%`);
      root.style.setProperty('--ring', elementsHsl);

    } else {
      // Clear all custom properties when not in custom theme
      const properties = [
        '--background', '--foreground', '--card', '--card-foreground', 
        '--popover', '--popover-foreground', '--primary', '--primary-foreground',
        '--secondary', '--secondary-foreground', '--muted', '--muted-foreground',
        '--accent', '--accent-foreground', '--destructive', '--destructive-foreground',
        '--border', '--input', '--ring'
      ];
      properties.forEach(prop => root.style.removeProperty(prop));
    }
  }, [customColors, theme]);

  return (
    <CustomThemeContext.Provider value={{ customColors, setCustomColors }}>
      {children}
    </CustomThemeContext.Provider>
  );
}