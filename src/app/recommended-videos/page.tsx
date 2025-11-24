"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Youtube } from 'lucide-react';

const CHANNEL_URL = 'https://www.youtube.com/@Almajeedye';

export default function RecommendedVideosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">مقاطع مرئية موصى بها</h1>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowRight className="h-6 w-6 text-black" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex justify-center items-center">
        <Card className="w-full max-w-lg shadow-lg border-gray-200 rounded-xl">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3 text-black justify-center">
              <Youtube className="h-8 w-8" />
              قناتنا على يوتيوب
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-center text-black mb-4">
              لمشاهدة أحدث المقاطع المرئية، يرجى زيارة قناتنا مباشرة على يوتيوب.
            </p>
            <p className="text-md text-center text-gray-600 mb-6">
              انقر على الزر أدناه للانتقال إلى القناة والاستمتاع بالمحتوى.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg py-3 px-6">
              <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <Youtube className="ml-2 rtl:mr-2 h-6 w-6" />
                الانتقال إلى يوتيوب
              </a>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
