
"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-provider";
import { useTranslation } from "@/lib/i18n";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const { language } = useLanguage();
  const t = useTranslation(language);

  const themes = [
    { name: "light", label: t("Default Light") },
    { name: "dark", label: t("Default Dark") },
    { name: "blue", label: t("Blue") },
    { name: "green", label: t("Green") },
    { name: "custom", label: t("Custom") },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {themes.map((theme) => (
        <Button
          key={theme.name}
          variant="outline"
          onClick={() => setTheme(theme.name)}
        >
          {theme.label}
        </Button>
      ))}
    </div>
  );
}
