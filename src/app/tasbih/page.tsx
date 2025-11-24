
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Save, RotateCcw, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { triggerHapticFeedback, triggerSelectionHaptic } from '@/lib/haptics';

const dhikrOptions = [
  " سبحان الله 33 ",
  " الحمد لله 33",
  " الله أكبر 33 ",
  "لا إله إلا الله",
  "استغفر الله",
  "اللهم صلي على محمد وعلى آل محمد",
];

export default function TasbihPage() {
  const [count, setCount] = useState(0);
  const [selectedDhikr, setSelectedDhikr] = useState(dhikrOptions[0]);
  const [enableVibration, setEnableVibration] = useState(false);

  // Load saved state from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem('tasbihCount');
    const savedDhikr = localStorage.getItem('tasbihSelectedDhikr');
    const savedVibration = localStorage.getItem('tasbihEnableVibration');

    if (savedCount) setCount(parseInt(savedCount, 10));
    if (savedDhikr && dhikrOptions.includes(savedDhikr)) setSelectedDhikr(savedDhikr);
    if (savedVibration) setEnableVibration(savedVibration === 'true');
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('tasbihCount', count.toString());
  }, [count]);

  useEffect(() => {
    localStorage.setItem('tasbihSelectedDhikr', selectedDhikr);
  }, [selectedDhikr]);

  useEffect(() => {
    localStorage.setItem('tasbihEnableVibration', enableVibration.toString());
  }, [enableVibration]);

  const incrementCount = async () => {
    setCount(prevCount => prevCount + 1);
    if (enableVibration) {
      await triggerHapticFeedback('light');
    }
  };

  const resetCount = async () => {
    setCount(0);
    if (enableVibration) {
      await triggerHapticFeedback('heavy');
    }
  };

  const handleDhikrChange = async (newDhikr: string) => {
    setSelectedDhikr(newDhikr);
    resetCount();
    await triggerSelectionHaptic();
  };

  const handleSave = async () => {
    // Placeholder for save functionality
    // For now, it implicitly saves to localStorage via useEffect
    alert(`تم حفظ العد: ${count} لـ "${selectedDhikr}"`);
    await triggerHapticFeedback('medium');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold">المسبحة الإلكترونية</h1>
          <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary/80">
            <Link href="/">
              <ArrowRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 space-y-8 text-center">
        <Card className="w-full max-w-md shadow-xl border-border/40">
          <CardHeader>
            <Select value={selectedDhikr} onValueChange={handleDhikrChange}>
              <SelectTrigger className="w-full text-lg py-3 bg-input/70 focus:bg-input">
                <SelectValue placeholder="اختر الذكر" />
              </SelectTrigger>
              <SelectContent>
                {dhikrOptions.map((option) => (
                  <SelectItem key={option} value={option} className="text-lg text-right">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6">
            <p className="text-muted-foreground text-lg">انقر على الدائرة للعد</p>
            <Button
              variant="outline"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-primary bg-primary/10 hover:bg-primary/20 text-primary hover:text-foreground flex flex-col items-center justify-center shadow-lg focus:ring-4 focus:ring-primary/50"
              onClick={incrementCount}
            >
              <span className="text-7xl md:text-8xl font-bold">{count}</span>
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-6 pt-6">
            <div className="flex space-x-4 rtl:space-x-reverse w-full justify-center">
              <Button onClick={handleSave} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 px-6 rounded-md">
                <Save className="ml-2 rtl:mr-2 h-5 w-5" />
                حفظ
              </Button>
              <Button onClick={resetCount} variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground text-lg py-3 px-6 rounded-md">
                <RotateCcw className="ml-2 rtl:mr-2 h-5 w-5" />
                إعادة تعيين
              </Button>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse pt-4">
              <Checkbox
                id="enableVibration"
                checked={enableVibration}
                onCheckedChange={(checked) => setEnableVibration(checked as boolean)}
                className="h-5 w-5 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
              <Label htmlFor="enableVibration" className="text-md text-muted-foreground">
                {enableVibration ? "الاهتزاز مفعل" : "تفعيل الاهتزاز"}
              </Label>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
