
"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ListenSabahAdhkarPage() {
  const videoId = "ZjZ-eOZkRDg";
  const startTime = 825; // in seconds

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold">سماع أذكار الصباح</h1>
          <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary/80">
            <Link href="/">
              <ArrowRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl aspect-video bg-muted rounded-lg shadow-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?start=${startTime}&rel=0`}
            title="YouTube video player - أذكار الصباح"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="border-0"
          ></iframe>
        </div>
        <p className="mt-6 text-center text-muted-foreground">
          أذكار الصباح بصوت الشيخ عبد السلام المجيدي.
        </p>
      </main>
    </div>
  );
}
