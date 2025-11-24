
"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';
import { masaAdhkar, type AdhkarItem, type LocaleText } from '@/data/adhkar'; 
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

const MasaaAdhkarPage: React.FC = () => {
  const [currentAdhkarIndex, setCurrentAdhkarIndex] = useState(0);
  const [adhkarList, setAdhkarList] = useState<AdhkarItem[]>([]);
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [isAutoSwipeEnabled, setIsAutoSwipeEnabled] = useState(false);
  const { toast } = useToast();
  const [isAutoTicking, setIsAutoTicking] = useState(false);
  const [tickInterval, setTickInterval] = useState(5000); // Default to 5 seconds

  useEffect(() => {
    setAdhkarList(masaAdhkar); 
  }, []);

  const handleNextAdhkar = () => {
    setCurrentAdhkarIndex((prevIndex) => (prevIndex + 1) % adhkarList.length);
  };

  const handlePreviousAdhkar = () => {
    setCurrentAdhkarIndex((prevIndex) => (prevIndex - 1 + adhkarList.length) % adhkarList.length);
  };

  if (adhkarList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] p-4 text-xl">
        {masaAdhkar.length === 0 ? t("لا توجد أذكار المساء حالياً.") : t("جاري تحميل الأذكار...")}
      </div>
    );
  }

  const currentAdhkar = adhkarList[currentAdhkarIndex];
  const videoId = "ZjZ-eOZkRDg"; 
  const startTime = 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <header className="w-full max-w-lg mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">{t('أذكار المساء')}</h1> 
      </header>
      
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
                description: t("لقد أتممت جميع أذكار المساء."),
              });
            }
          }
        }} 
      />

      {adhkarList.length > 1 && (
        <div className="flex justify-between w-full max-w-sm mt-8">
          <Button
            onClick={handlePreviousAdhkar}
            variant="outline"
            className="text-lg py-3 px-6"
            disabled={adhkarList.length <= 1}
          >
            <ArrowRight className="ml-2 rtl:mr-2 h-5 w-5" />
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
          id="auto-swipe-toggle-masaa"
          checked={isAutoSwipeEnabled}
          onChange={setIsAutoSwipeEnabled}
        />
        <Label htmlFor="auto-swipe-toggle-masaa" className="text-sm text-muted-foreground">
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
                  {ms/1000} {language === 'ar' ? 'ث' : 's'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>

      <div className="w-full max-w-lg mx-auto mt-8">
        <h2 className="text-xl font-semibold text-center text-primary mb-3">{t('الاستماع إلى أذكار المساء:')}</h2>
        <div className="aspect-video w-full rounded-lg shadow-md overflow-hidden border border-border/30">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=0&rel=0`}
            title="YouTube video player - أذكار المساء"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MasaaAdhkarPage;
