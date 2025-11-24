
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { jameahAdhkarCategories, type JameahCategory } from '@/data/adhkar';
import IslamicStarIcon from '@/components/ui/islamic-star-icon';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '@/context/language-provider';
import { useTranslation } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function AdhkarJameahPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [categories, setCategories] = useState<JameahCategory[]>([]);

  useEffect(() => {
    const favoriteSlugs = JSON.parse(localStorage.getItem('favoriteAdhkar') || '[]');
    const sortedCategories = [...jameahAdhkarCategories].sort((a, b) => {
      const aIsFavorite = favoriteSlugs.includes(a.slug);
      const bIsFavorite = favoriteSlugs.includes(b.slug);
      if (aIsFavorite && !bIsFavorite) return -1;
      if (!aIsFavorite && bIsFavorite) return 1;
      return 0;
    });
    setCategories(sortedCategories);
  }, []);

  const handleToggleFavorite = (slug: string) => {
    const favoriteSlugs = JSON.parse(localStorage.getItem('favoriteAdhkar') || '[]');
    const newFavoriteSlugs = favoriteSlugs.includes(slug)
      ? favoriteSlugs.filter((s: string) => s !== slug)
      : [...favoriteSlugs, slug];
    localStorage.setItem('favoriteAdhkar', JSON.stringify(newFavoriteSlugs));
    const sortedCategories = [...jameahAdhkarCategories].sort((a, b) => {
        const aIsFavorite = newFavoriteSlugs.includes(a.slug);
        const bIsFavorite = newFavoriteSlugs.includes(b.slug);
        if (aIsFavorite && !bIsFavorite) return -1;
        if (!aIsFavorite && bIsFavorite) return 1;
        return 0;
      });
    setCategories(sortedCategories);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-card text-card-foreground p-4 shadow-md sticky top-0 z-40 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold text-primary">{t('اذكار المناسبات')}</h1>
          <Button variant="ghost" size="icon" asChild className="text-primary hover:bg-primary/10">
            <Link href="/">
              <ArrowRight className="h-6 w-6" />
              <span className="sr-only">{t('العودة إلى الرئيسية')}</span>
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-3">
          {categories.map((category) => {
            const categoryTitle = typeof category.title === 'string'
              ? category.title
              : (category.title[language] || category.title.ar);
            const isFavorite = JSON.parse(localStorage.getItem('favoriteAdhkar') || '[]').includes(category.slug);
            return (
              <div key={category.slug} className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" onClick={() => handleToggleFavorite(category.slug)}>
                  <Star className={`h-6 w-6 ${isFavorite ? 'text-green-500 fill-green-500' : 'text-gray-400'}`} />
                </Button>
                <Link href={`/adhkar-jameah/${category.slug}`} passHref className="flex-grow">
                  <Card className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border-border/30 bg-card/90 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IslamicStarIcon
                          iconType={category.iconType}
                          className="w-7 h-7 text-primary ml-3 rtl:mr-0 rtl:ml-3"
                        />
                        <h2 className="text-lg font-medium text-foreground/90">{categoryTitle}</h2>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transform scale-x-[-1]" />
                    </div>
                  </Card>
                </Link>
              </div>
            )
          })}
        </div>
         {jameahAdhkarCategories.length === 0 && (
          <p className="text-center text-muted-foreground py-10">
            {t('لا توجد أذكار متاحة حالياً في هذا القسم.')}
          </p>
        )}
      </main>
    </div>
  );
}
