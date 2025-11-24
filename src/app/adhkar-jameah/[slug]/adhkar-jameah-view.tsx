
"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight as BackArrowIcon, Star, Play, Pause } from 'lucide-react';
import { jameahAdhkarCategories, type AdhkarItem, type JameahCategory, type LocaleText } from '@/data/adhkar';
import AdhkarCard from '@/components/adhkar-card';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import CustomToggleSwitch from '@/components/ui/custom-toggle-switch';
import { useLanguage } from '@/context/language-provider';
import { useTranslation } from '@/lib/i18n';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


type Language = keyof LocaleText;

export default function AdhkarJameahView() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === 'string' ? params.slug : undefined;

  const [category, setCategory] = useState<JameahCategory | null>(null);
  const [currentAdhkarIndex, setCurrentAdhkarIndex] = useState(0);
  const [adhkarList, setAdhkarList] = useState<AdhkarItem[]>([]);
  const [favoriteAdhkar, setFavoriteAdhkar] = useState<Set<string | number>>(new Set());
  const [isAutoSwipeEnabled, setIsAutoSwipeEnabled] = useState(false);
  const { toast } = useToast();
  const [isAutoTicking, setIsAutoTicking] = useState(false);
  const [tickInterval, setTickInterval] = useState(5000); // Default to 5 seconds

  useEffect(() => {
    if (slug) {
      const foundCategory = jameahAdhkarCategories.find(cat => cat.slug === slug);
      if (foundCategory) {
        setCategory(foundCategory);
        const storedFavorites = localStorage.getItem(`favorite_adhkar_${slug}`);
        const favorites = storedFavorites ? new Set(JSON.parse(storedFavorites)) : new Set<string | number>();
        setFavoriteAdhkar(favorites);
        
        const sortedAdhkar = [...foundCategory.adhkar].sort((a, b) => {
          const aIsFavorite = favorites.has(a.id);
          const bIsFavorite = favorites.has(b.id);
          if (aIsFavorite && !bIsFavorite) return -1;
          if (!aIsFavorite && bIsFavorite) return 1;
          
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
        setAdhkarList(sortedAdhkar);
        setCurrentAdhkarIndex(0);
      } else {
        router.push('/adhkar-jameah');
      }
    }
  }, [slug, router]);

  const toggleFavorite = (adhkarId: string | number) => {
    const newFavorites = new Set(favoriteAdhkar);
    if (newFavorites.has(adhkarId)) {
      newFavorites.delete(adhkarId);
    } else {
      newFavorites.add(adhkarId);
    }
    setFavoriteAdhkar(newFavorites);
    if(slug) {
      localStorage.setItem(`favorite_adhkar_${slug}`, JSON.stringify(Array.from(newFavorites)));
    }
  
    const sortedAdhkar = [...adhkarList].sort((a, b) => {
        const aIsFavorite = newFavorites.has(a.id);
        const bIsFavorite = newFavorites.has(b.id);
        if (aIsFavorite && !bIsFavorite) return -1;
        if (!aIsFavorite && bIsFavorite) return 1;
        
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
      
    const currentAdhkarId = adhkarList[currentAdhkarIndex]?.id;
    const newIndex = sortedAdhkar.findIndex(a => a.id === currentAdhkarId);
  
    setAdhkarList(sortedAdhkar);
    if(newIndex !== -1) {
        setCurrentAdhkarIndex(newIndex);
    }
  };

  const handleNextAdhkar = () => {
    setCurrentAdhkarIndex((prevIndex) => (prevIndex + 1) % adhkarList.length);
  };

  const handlePreviousAdhkar = () => {
    setCurrentAdhkarIndex((prevIndex) => (prevIndex - 1 + adhkarList.length) % adhkarList.length);
  };

  if (!category || adhkarList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] p-4 text-xl">
        {category && adhkarList.length === 0 ? `لا توجد أذكار في قسم "${typeof category.title === 'string' ? t(category.title as any) : category.title[language]}" حالياً.` : "جاري تحميل الأذكار..."}
      </div>
    );
  }

  const currentAdhkar = adhkarList[currentAdhkarIndex];
  const categoryTitle = typeof category.title === 'string' ? category.title : (category.title[language] || category.title.ar);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-card text-card-foreground p-4 shadow-md sticky top-0 z-40 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-semibold text-primary truncate" title={categoryTitle}>
            {categoryTitle}
          </h1>
          <Button variant="ghost" size="icon" asChild className="text-primary hover:bg-primary/10">
            <Link href="/adhkar-jameah">
              <BackArrowIcon className="h-6 w-6" />
              <span className="sr-only">{t('العودة إلى قائمة الأذكار')}</span>
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="relative w-full max-w-3xl">
            <AdhkarCard
              adhkar={currentAdhkar}
              isAutoTicking={isAutoTicking}
              tickInterval={tickInterval}
              onComplete={() => {
                  if (isAutoSwipeEnabled || isAutoTicking) {
                    if (currentAdhkarIndex < adhkarList.length - 1) {
                        handleNextAdhkar();
                    } else {
                        setIsAutoTicking(false);
                        toast({
                        title: t("اكتملت الأذكار"),
                        description: `${t('لقد أتممت جميع الأذكار في قسم')} "${categoryTitle}".`,
                        });
                    }
                  }
              }}
            />
            <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 text-yellow-400 hover:text-yellow-500 z-10"
                onClick={() => toggleFavorite(currentAdhkar.id)}
            >
                <Star className={`h-6 w-6 ${favoriteAdhkar.has(currentAdhkar.id) ? 'fill-current' : ''}`} />
                <span className="sr-only">Toggle Favorite</span>
            </Button>
        </div>

        {adhkarList.length > 1 && (
          <div className="flex justify-between w-full max-w-sm mt-8">
            <Button
              onClick={handlePreviousAdhkar}
              variant="outline"
              className="text-lg py-3 px-6"
              disabled={adhkarList.length <= 1}
            >
              <BackArrowIcon className="ml-2 rtl:mr-2 h-5 w-5" />
              {t('السابق')}
            </Button>
            <Button
              onClick={handleNextAdhkar}
              variant="outline"
              className="text-lg py-3 px-6"
              disabled={adhkarList.length <= 1}
            >
              {t('التالي')}
              <ArrowLeft className="mr-2 rtl:ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        <div className="mt-4 text-sm text-muted-foreground">
          {currentAdhkarIndex + 1} / {adhkarList.length}
        </div>

        <div className="flex items-center space-x-2 rtl:space-x-reverse mt-6 justify-center">
          <CustomToggleSwitch
            id={`auto-swipe-toggle-jameah-${slug}`}
            checked={isAutoSwipeEnabled}
            onChange={setIsAutoSwipeEnabled}
          />
          <Label htmlFor={`auto-swipe-toggle-jameah-${slug}`} className="text-sm text-muted-foreground">
            {t('التمرير التلقائي للتالي عند الاكتمال')}
          </Label>
        </div>
        
        <div className="flex items-center space-x-4 rtl:space-x-reverse mt-6">
          <Button onClick={() => setIsAutoTicking(!isAutoTicking)} variant="outline" size="icon">
            {isAutoTicking ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Select onValueChange={(value) => setTickInterval(Number(value))} defaultValue={String(tickInterval)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder={t('اختر الوقت')} />
            </SelectTrigger>
            <SelectContent>
              {[5000, 10000, 15000, 20000, 30000, 40000, 50000, 60000].map(ms => (
                <SelectItem key={ms} value={String(ms)}>
                  {ms / 1000} {language === 'ar' ? 'ث' : 's'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </main>
    </div>
  );
};
