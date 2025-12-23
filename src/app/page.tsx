"use client";

import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/language-provider";
import { useTranslation } from "@/lib/i18n";
import { Sun, Moon, Palette, Calculator, Menu, Construction, Settings } from "lucide-react";

// --- CUSTOM COMPONENT: Gold Capsule Button ---
const AppButton = ({ translationKey, icon: Icon, href, onClick, className }: any) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const content = (
    <div className="btn-inner-content">
      <div className="btn-text-wrapper">
        <span className="btn-text">{t(translationKey)}</span>
      </div>
      <div className="btn-icon-circle">
        <Icon className="btn-icon-svg" />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`gold-capsule-btn ${className || ""}`}>
        {content}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`gold-capsule-btn ${className || ""}`}>
      {content}
    </button>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  function openNavBar() {
    if (typeof window !== "undefined" && typeof (window as any).openAppSidebar === "function") {
      (window as any).openAppSidebar();
    } else {
      console.log("Sidebar function not found");
    }
  }

  return (
    // 'main-page-fixed-wrapper' forces this page to sit on top of everything else (No margins, No Scroll)
    <div dir="rtl" className="main-page-fixed-wrapper">
      
      {/* CENTRAL CONTENT */}
      <main className="flex-grow flex flex-col items-center justify-end pb-8 w-full z-10">

        {/* Buttons Grid */}
        <div className="w-full max-w-md px-8 flex flex-col gap-5">
          {/* Row 1 */}
          <div className="flex gap-5 w-full">
            <div className="flex-1">
              <AppButton translationKey="أذكار الصباح" icon={Sun} href="/adhkar/sabah" />
            </div>
            <div className="flex-1">
              <AppButton translationKey="أذكار المساء" icon={Moon} href="/adhkar/masaa" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-5 w-full">
            <div className="flex-1">
              <AppButton translationKey="أذكار منوعة" icon={Palette} href="/adhkar-jameah" />
            </div>
            <div className="flex-1">
              <AppButton translationKey="مسبحة إلكترونية" icon={Calculator} href="/tasbih" />
            </div>
          </div>
        </div>

        {/* About Author Button */}
        <div className="mt-6 w-full max-w-md px-20">
          <Link href="/about-us" className="w-full block">
            <div className="outline-capsule-btn">
              <span>{t("عن المؤلف")}</span>
            </div>
          </Link>
        </div>
      </main>

      {/* BOTTOM NAVIGATION */}
      <footer className="main-footer">
        <Link href="/settings" className="nav-item">
          <Settings className="w-6 h-6" />
        </Link>
        <button className="nav-item">
          <Construction className="w-6 h-6" />
        </button>
        <button className="nav-item">
          <Construction className="w-6 h-6" />
        </button>
        <button onClick={openNavBar} className="nav-item-highlight">
          <Menu className="w-8 h-8" />
        </button>
      </footer>
    </div>
  );
}