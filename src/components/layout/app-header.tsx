
"use client";

import Link from 'next/link';
import { Menu, Sunrise, Moon, Headphones, Layers, Settings, Repeat, Video, Users, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CustomSidebar } from "@/components/ui/custom-sidebar";
import QuranicLogo from '@/components/quranic-logo';
import { Separator } from '../ui/separator';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { useLanguage } from '@/context/language-provider';
import { useTranslation } from '@/lib/i18n';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  isMain?: boolean;
  subItems?: NavItem[];
  onClick?: () => void;
  isOpen?: boolean;
}

export default function AppHeader() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSabahOpen, setIsSabahOpen] = useState(false);
  const [isMasaaOpen, setIsMasaaOpen] = useState(false);

  useEffect(() => {
    (window as any).openAppSidebar = () => setIsSidebarOpen(true);
    // Clean up the function when the component unmounts
    return () => {
      delete (window as any).openAppSidebar;
    };
  }, []);

  const sidebarNavItems: NavItem[] = [
    {
      href: "#",
      label: t("أذكار الصباح"),
      icon: Sunrise,
      onClick: () => setIsSabahOpen(!isSabahOpen),
      isOpen: isSabahOpen,
      subItems: [
        { href: "/adhkar/sabah", label: t("اذكار مفصلة"), icon: Menu },
        { href: "/adhkar/sabah/concise", label: t("اذكار مختصره"), icon: Menu },
      ]
    },
    {
      href: "#",
      label: t("أذكار المساء"),
      icon: Moon,
      onClick: () => setIsMasaaOpen(!isMasaaOpen),
      isOpen: isMasaaOpen,
      subItems: [
        { href: "/adhkar/masaa", label: t("اذكار مفصلة"), icon: Menu },
        { href: "/adhkar/masaa/concise", label: t("اذكار مختصره"), icon: Menu },
      ]
    },
    { href: "/adhkar/sabah/listen", label: t("سماع أذكار الصباح"), icon: Headphones, isMain: true },
    { href: "/adhkar-jameah", label: t("الاذكار الجامعه"), icon: Layers, isMain: true },
    { href: "/tasbih", label: t("المسبحة الالكترونية"), icon: Repeat, isMain: true },
    { href: "/recommended-videos", label: t("مقاطع مرئية موصى بها"), icon: Video, isMain: true },
    { href: "/about-us", label: t("من نحن"), icon: Users, isMain: true },
    { href: "/settings", label: t("الضبط"), icon: Settings, isMain: true },
  ];

  return (
    <header className="bg-card text-card-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="remi-tran-theme-button-container">
          <ThemeToggleButton />
        </div>
        
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700 p-2" onClick={() => setIsSidebarOpen(true)}>
          <Menu className="h-12 w-12" />
          <span className="sr-only">Open menu</span>
        </Button>
        <CustomSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} side={language === 'ar' ? 'right' : 'left'}>
          <div className="flex flex-col h-full bg-green-900 text-white">
            <div className="p-6 border-b border-green-800 text-center">
              <Link href="/" className="flex flex-col items-center gap-3" onClick={() => setIsSidebarOpen(false)}>
                <QuranicLogo className="h-16 w-16 text-white" />
                <h1 className="text-xl font-bold text-white mt-2">
                  {t("اذكارك حياتك")}
                </h1>
              </Link>
            </div>
            <Separator className="bg-green-800" />
            <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
              {sidebarNavItems.map((item) => (
                <div key={item.label}>
                  {item.isMain || !item.subItems ? (
                    <Link
                      href={item.href}
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        setIsSidebarOpen(false);
                      }}
                      className="flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium text-white hover:bg-green-800 transition-colors"
                    >
                      <item.icon className="h-6 w-6 text-white" />
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={item.onClick}
                        className="w-full flex items-center justify-between gap-3 rounded-md px-3 py-3 text-base font-medium text-white hover:bg-green-800 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-6 w-6 text-white" />
                          {item.label}
                        </div>
                        {item.isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${item.isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="pl-8 py-1 space-y-1">
                          {item.subItems?.map(subItem => (
                            <Link
                              href={subItem.href}
                              key={subItem.label}
                              onClick={() => setIsSidebarOpen(false)}
                              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-green-800 hover:text-white transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Separator className="bg-green-800" />
            <div className="p-4 text-center text-xs text-gray-400">
              {t("الإصدار 1.0.0")}
            </div>
          </div>
        </CustomSidebar>
      </div>
    </header>
  );
}
