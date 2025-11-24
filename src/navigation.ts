
import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'ar'];
export const localePrefix = 'always'; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same path, use
  // the star `*` to catch them all.
  '/': '/',
  '/blog': '/blog',

  // If locales use different paths, specify
  // them separately for each locale.
  '/about': {
    en: '/about',
    ar: '/about'
  },

  // Also (optional) catch-all routes are supported
  '/categories/[...slug]': {
    en: '/categories/[...slug]',
    ar: '/categories/[...slug]'
  }
};

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
