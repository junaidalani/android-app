
"use client";

import { useLanguage } from '@/context/language-provider';
import { useTranslation } from '@/lib/i18n';

export default function AppFooter() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground py-6 text-center border-t">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          {t("© {currentYear} بصائر المعرفة القرآنية. جميع الحقوق محفوظة.", { currentYear })}
        </p>
      </div>
    </footer>
  );
}
