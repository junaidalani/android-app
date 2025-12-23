'use client';

import { notoNaskhArabic, geistSans, geistMono } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from '@/context/language-provider';
import { FontSizeProvider } from '@/context/font-size-provider';
import { CustomThemeProvider } from '@/context/custom-theme-provider';
import { useEffect } from 'react';
import { ThemeColorUpdater } from '@/components/theme-color-updater';
import PlayStoreNotifier from '@/components/play-store-notifier';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  useEffect(() => {
    // Initialize Capacitor plugins for mobile
    if (typeof window !== 'undefined') {
      import('@capacitor/core').then(({ Capacitor }) => {
        if (Capacitor.isNativePlatform()) {
          import('@capacitor/splash-screen').then(({ SplashScreen }) => {
            SplashScreen.hide();
          });
        }
      });
    }
  }, []);

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body 
        className={cn(
          geistSans.variable, 
          geistMono.variable,
          notoNaskhArabic.variable,
          "font-arabic antialiased flex flex-col min-h-screen text-foreground",
          isMainPage ? 'bg-main-page' : 'bg-other-pages'
        )}
      >
        <CustomThemeProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            themes={['light', 'dark', 'blue', 'green', 'custom', 'serene']}
          >
            <ThemeColorUpdater />
            <PlayStoreNotifier />
            <LanguageProvider>
              <FontSizeProvider>
                <AppHeader />
                <main className={cn("flex-grow flex flex-col", {
                  "container mx-auto px-4 py-8": !isMainPage
                })}>
                  {children}
                </main>
                <AppFooter />
                <Toaster />
              </FontSizeProvider>
            </LanguageProvider>
          </ThemeProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}