
"use client";

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { AdhkarItem, LocaleText } from '@/data/adhkar';
import { RotateCcw, Languages } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-provider';

type Language = keyof LocaleText;

interface AdhkarCardProps {
  adhkar: AdhkarItem;
  onComplete?: () => void;
  isAutoTicking?: boolean;
  tickInterval?: number;
}

const AdhkarCard: React.FC<AdhkarCardProps> = ({ adhkar, onComplete, isAutoTicking = false, tickInterval = 1000 }) => {
  const [count, setCount] = useState(adhkar.repetitions);
  const autoClickTimer = useRef<NodeJS.Timeout | null>(null);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setCount(adhkar.repetitions);
  }, [adhkar]);

  const handlePress = () => {
    if (adhkar.repetitions === 0) return;
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      if (newCount === 0 && onComplete) {
        onComplete();
      }
    }
  };

  useEffect(() => {
    if (isAutoTicking && count > 0) {
      autoClickTimer.current = setInterval(() => {
        handlePress();
      }, tickInterval);
    } else {
      if (autoClickTimer.current) {
        clearInterval(autoClickTimer.current);
      }
    }

    return () => {
      if (autoClickTimer.current) {
        clearInterval(autoClickTimer.current);
      }
    };
  }, [isAutoTicking, count, tickInterval, handlePress]);


  const handleReset = () => {
    setCount(adhkar.repetitions);
  };

  const getTextContent = () => {
    if (adhkar.text && typeof adhkar.text === 'object') {
      const content = adhkar.text[language];
      if (content) {
        return content;
      }
      if (language === 'transliteration') {
        return "Transliteration not available for this item.";
      }
      // Fallback for other languages if not present
      return adhkar.text.ar || "Adhkar text not available";
    }
    return "Adhkar text not available";
  };

  const getInfoContent = () => {
    if (adhkar.info && typeof adhkar.info === 'object') {
      return adhkar.info[language] || adhkar.info.ar || adhkar.info.en || "";
    }
    return "";
  };

  const isRtl = language === 'ar';
  const currentText = getTextContent();
  const currentInfo = getInfoContent();

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <div className="w-full flex justify-end mb-3">
        <Select onValueChange={(value: Language) => setLanguage(value)} value={language}>
          <SelectTrigger className="w-[180px] bg-card border-border/70 focus:ring-primary">
            <Languages className="mr-2 rtl:ml-2 h-4 w-4 text-primary" />
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ar">العربية</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="transliteration">Transliteration</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="w-full shadow-xl mb-6 border-border/40">
        <CardContent
          className={cn(
            "p-4 sm:p-5 md:p-6",
            adhkar.repetitions > 0 ? 'cursor-pointer' : '',
            isRtl ? 'text-right' : 'text-left'
          )}
          onClick={adhkar.repetitions > 0 ? handlePress : undefined}
          role={adhkar.repetitions > 0 ? "button" : undefined}
          tabIndex={adhkar.repetitions > 0 ? 0 : undefined}
          onKeyDown={adhkar.repetitions > 0 ? (e) => { if (e.key === 'Enter' || e.key === ' ') handlePress();} : undefined}
          aria-label={adhkar.repetitions > 0 ? (isRtl ? "اضغط للعد" : "Press to count") : undefined}
        >
          <p
            className={cn(
              "text-base sm:text-lg md:text-xl lg:text-2xl font-arabic leading-loose whitespace-pre-wrap text-foreground",
              language === 'transliteration' && 'font-sans tracking-wider'
            )}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {adhkar.id}. {currentText}
          </p>
        </CardContent>
        {currentInfo && (
          <CardFooter
            className={cn(
              "p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0",
              isRtl ? 'text-right' : 'text-left'
            )}
          >
            <CardDescription
              className="text-sm italic text-muted-foreground"
              dir={isRtl ? 'rtl' : 'ltr'}
            >
              {currentInfo}
            </CardDescription>
          </CardFooter>
        )}
      </Card>

      {adhkar.repetitions > 0 && (
        <div className="flex flex-col items-center space-y-4">
          <div
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center
                       text-4xl sm:text-5xl md:text-6xl font-bold cursor-pointer shadow-lg
                       transition-all duration-150 active:scale-105 active:brightness-110
                       border-4 border-primary bg-primary/10 hover:bg-primary/20 text-primary hover:text-foreground"
            onClick={handlePress}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePress();}}
            aria-live="polite"
            aria-label={isRtl ? `اضغط للعد. العدد المتبقي: ${count}` : `Press to count. Remaining: ${count}`}
          >
            {count}
          </div>

          {count === 0 && (
            <Button
              variant="outline"
              onClick={handleReset}
              className="text-lg py-3 px-6 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
              aria-label={isRtl ? "إعادة تعيين العد" : "Reset count"}
            >
              <RotateCcw className="ml-2 rtl:mr-2 h-5 w-5" />
              {isRtl ? "إعادة" : "Reset"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default AdhkarCard;
