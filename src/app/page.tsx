"use client";

import { useRef } from "react";
import "./app-button.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Users, Youtube, BookOpen, Settings, Video } from "lucide-react";

export default function Home() {
  // Ref for nav bar (assumes nav bar is present in layout or header)
  const navRef = useRef<HTMLElement | null>(null);

  // Try to find nav bar on mount
  function openNavBar() {
    // Call the global function to open the sidebar in AppHeader
    if (typeof window !== 'undefined' && typeof (window as any).openAppSidebar === 'function') {
      (window as any).openAppSidebar();
    }
  }

  return (
    <div className="flex flex-col h-full pt-16">
      <main className="flex-grow flex flex-col items-center justify-center pb-24">
        {/* Static three-line icon and text, not a button */}
        <button 
          onClick={openNavBar} 
          className="flex flex-col items-center justify-center bg-foreground text-background rounded-lg p-4 shadow-lg transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground transform hover:scale-105 -translate-y-14"
        >
          <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <span className="mt-2 text-lg font-bold">ابدأ الأذكار</span>
        </button>
      </main>

      <footer className="fixed bottom-4 left-0 right-0 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center justify-around gap-x-4">
            <Link href="/about-us" className="flex flex-col items-center group">
              <div className="bg-foreground text-background rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground shadow-lg transform hover:scale-110">
                <Users className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-black group-hover:text-accent font-medium">من نحن</p>
            </Link>

            <a href="https://youtube.com/@almajeedye" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-foreground text-background rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-red-600 hover:text-white shadow-lg transform hover:scale-110">
                <Youtube className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-black group-hover:text-red-600 font-medium">فيديوات</p>
            </a>

            <a href="https://quranok.com/book/categories/%d8%a7%d9%84%d9%83%d8%aa%d8%a8/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-foreground text-background rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground shadow-lg transform hover:scale-110">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-black group-hover:text-accent font-medium">مكتبة</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
