
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Bell, MapPin, Clock, Languages, Text } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CustomToggleSwitch from '@/components/ui/custom-toggle-switch';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/language-provider';
import { useTranslation, Language } from '@/lib/i18n';
import { countries } from '@/data/countries';
import { FontSizeSwitcher } from '@/components/font-size-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { ColorPicker } from '@/components/color-picker';
import { useCustomTheme } from '@/context/custom-theme-provider';
import { useTheme } from 'next-themes';
import { scheduleNotification, cancelNotification, requestNotificationPermission } from '@/lib/notifications';

export default function SettingsPage() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);
  const { toast } = useToast();
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [morningNotifications, setMorningNotifications] = useState<boolean>(false);
  const [eveningNotifications, setEveningNotifications] = useState<boolean>(false);
  const [manualMorningTime, setManualMorningTime] = useState<string>('');
  const [manualEveningTime, setManualEveningTime] = useState<string>('');
  const { theme } = useTheme();
  const { customColors, setCustomColors } = useCustomTheme();

  useEffect(() => {
    const savedCountry = localStorage.getItem('settings:country');
    const savedMorning = localStorage.getItem('settings:morningNotifications');
    const savedEvening = localStorage.getItem('settings:eveningNotifications');
    const savedManualMorningTime = localStorage.getItem('settings:manualMorningTime');
    const savedManualEveningTime = localStorage.getItem('settings:manualEveningTime');

    if (savedCountry) setSelectedCountry(savedCountry);
    if (savedMorning) setMorningNotifications(savedMorning === 'true');
    if (savedEvening) setEveningNotifications(savedEvening === 'true');
    if (savedManualMorningTime) setManualMorningTime(savedManualMorningTime);
    if (savedManualEveningTime) setManualEveningTime(savedManualEveningTime);
  }, []);

  const handleSaveSettings = async () => {
    try {
      await requestNotificationPermission();

      localStorage.setItem('settings:country', selectedCountry);
      localStorage.setItem('settings:morningNotifications', String(morningNotifications));
      localStorage.setItem('settings:eveningNotifications', String(eveningNotifications));
  
      if (morningNotifications && manualMorningTime) {
        localStorage.setItem('settings:manualMorningTime', manualMorningTime);
        await scheduleNotification(manualMorningTime, 'morning');
      } else {
        localStorage.removeItem('settings:manualMorningTime');
        await cancelNotification('morning');
      }
  
      if (eveningNotifications && manualEveningTime) {
        localStorage.setItem('settings:manualEveningTime', manualEveningTime);
        await scheduleNotification(manualEveningTime, 'evening');
      } else {
        localStorage.removeItem('settings:manualEveningTime');
        await cancelNotification('evening');
      }
  
      toast({
        title: t('تم حفظ الإعدادات'),
        description: t('تم حفظ تفضيلاتك بنجاح.'),
      });
    } catch (error) {
      toast({
        title: t('خطأ'),
        description: (error as Error).message,
        variant: 'destructive',
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">{t('الضبط')}</h1>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowRight className="h-6 w-6 text-black" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <Card className="w-full max-w-2xl mx-auto shadow-lg rounded-xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-black">{t('إعدادات التطبيق')}</CardTitle>
            <CardDescription className="text-md text-black">
              {t('قم بتخصيص تفضيلات الإشعارات والموقع لتجربة أفضل.')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <Card className="p-4 sm:p-6 bg-gray-100 rounded-lg border border-gray-200">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-black">
                  <Languages className="h-5 w-5" />
                  {t('اللغة')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <Label htmlFor="language-select" className="text-md text-black">
                  {t('اختر اللغة')}
                </Label>
                <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                  <SelectTrigger id="language-select" className="w-full bg-white text-base">
                    <SelectValue placeholder={t('اختر اللغة')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ar" className="text-base text-right">العربية</SelectItem>
                    <SelectItem value="en" className="text-base text-left">English</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 bg-gray-100 rounded-lg border border-gray-200">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-black">
                  <Text className="h-5 w-5" />
                  {t('حجم الخط')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <FontSizeSwitcher />
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 bg-gray-100 rounded-lg border border-gray-200">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-black">
                  <Text className="h-5 w-5" />
                  {t('الألوان')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <ThemeSwitcher />
                {theme === 'custom' && (
                  <div className="space-y-4 pt-4">
                    <ColorPicker label={t('Theme & Background')} color={customColors.background} onChange={(color) => setCustomColors({...customColors, background: color})} />
                    <ColorPicker label={t('Main Text')} color={customColors.mainText} onChange={(color) => setCustomColors({...customColors, mainText: color})} />
                    <ColorPicker label={t('Other Text')} color={customColors.otherText} onChange={(color) => setCustomColors({...customColors, otherText: color})} />
                    <ColorPicker label={t('Buttons & Elements')} color={customColors.elements} onChange={(color) => setCustomColors({...customColors, elements: color})} />
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="p-4 sm:p-6 bg-gray-100 rounded-lg border border-gray-200">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-black">
                  <MapPin className="h-5 w-5" />
                  {t('إعدادات الموقع والتوقيت')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <Label htmlFor="country-select" className="text-md text-black">
                  {t('اختر الدولة (لتحديد أوقات الأذكار التقريبية)')}
                </Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger id="country-select" className="w-full bg-white text-base">
                    <SelectValue placeholder={t('اختر دولتك...')} />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value} className="text-base text-right">
                        {language === 'ar' ? country.label_ar : country.label_en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">
                  {t('تحديد الدولة يساعد في ضبط توقيت الإشعارات بشكل تقريبي. لدقة أعلى، استخدم الإعداد اليدوي أدناه.')}
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 bg-gray-100 rounded-lg border border-gray-200">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-black">
                  <Bell className="h-5 w-5" />
                  {t('إعدادات تنبيهات الأذكار')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-white">
                    <Label htmlFor="morning-notifications-toggle" className="text-lg text-black">
                      {t('تنبيهات أذكار الصباح')}
                    </Label>
                    <CustomToggleSwitch
                      id="morning-notifications-toggle"
                      checked={morningNotifications}
                      onChange={setMorningNotifications}
                    />
                  </div>
                  {morningNotifications && (
                    <div className="ml-4 rtl:mr-4 pl-2 rtl:pr-2 border-l-2 rtl:border-r-2 rtl:border-l-0 border-gray-300 space-y-2 py-2">
                      <Label htmlFor="manual-morning-time" className="text-md flex items-center gap-2 text-black">
                        <Clock className="h-4 w-4" />
                        {t('وقت تنبيه أذكار الصباح (يدوي):')}
                      </Label>
                      <Input
                        id="manual-morning-time"
                        type="time"
                        value={manualMorningTime}
                        onChange={(e) => setManualMorningTime(e.target.value)}
                        className="w-full sm:w-1/2 bg-white text-base"
                      />
                       <p className="text-xs text-gray-500">
                        {t('سيتم إرسال إشعار في الوقت اليدوي المحدد.')}
                       </p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-white">
                    <Label htmlFor="evening-notifications-toggle" className="text-lg text-black">
                      {t('تنبيهات أذكار المساء')}
                    </Label>
                    <CustomToggleSwitch
                      id="evening-notifications-toggle"
                      checked={eveningNotifications}
                      onChange={setEveningNotifications}
                    />
                  </div>
                  {eveningNotifications && (
                    <div className="ml-4 rtl:mr-4 pl-2 rtl:pr-2 border-l-2 rtl:border-r-2 rtl:border-l-0 border-gray-300 space-y-2 py-2">
                      <Label htmlFor="manual-evening-time" className="text-md flex items-center gap-2 text-black">
                         <Clock className="h-4 w-4" />
                        {t('وقت تنبيه أذكار المساء (يدوي):')}
                      </Label>
                      <Input
                        id="manual-evening-time"
                        type="time"
                        value={manualEveningTime}
                        onChange={(e) => setManualEveningTime(e.target.value)}
                        className="w-full sm:w-1/2 bg-white text-base"
                      />
                      <p className="text-xs text-gray-500">
                        {t('سيتم إرسال إشعار في الوقت اليدوي المحدد.')}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <div className="pt-4">
              <Button onClick={handleSaveSettings} size="lg" className="w-full text-lg text-white bg-blue-600 hover:bg-blue-700">
                {t('حفظ الإعدادات')}
              </Button>
            </div>

          </CardContent>
        </Card>
      </main>
    </div>
  );
}
