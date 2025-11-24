'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useCustomTheme } from '@/context/custom-theme-provider';

export function ThemeColorUpdater() {
  const { theme } = useTheme();
  const { customColors } = useCustomTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    let hexColor = '#000000'; // Default color

    if (theme === 'custom') {
      hexColor = customColors.background;
    } else {
      const backgroundColor = getComputedStyle(root).getPropertyValue('--background').trim();
      if (backgroundColor) {
        const [h, s, l] = backgroundColor.split(' ').map(val => parseFloat(val.replace('%', '')));
        
        const hslToHex = (h, s, l) => {
          s /= 100;
          l /= 100;
          const a = s * Math.min(l, 1 - l);
          const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
          };
          return `#${f(0)}${f(8)}${f(4)}`;
        };
        hexColor = hslToHex(h, s, l);
      }
    }

    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
        themeColorMeta = document.createElement('meta');
        themeColorMeta.setAttribute('name', 'theme-color');
        document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.setAttribute('content', hexColor);

  }, [theme, customColors]);

  return null;
}
