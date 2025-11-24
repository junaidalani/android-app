
'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useRouter, usePathname, locales} from '@/navigation';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.replace(pathname, {locale: nextLocale});
  }

  return (
    <label>
      <p className="sr-only">{t('label')}</p>
      <select
        defaultValue={locale}
        onChange={onSelectChange}
      >
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', {locale: cur})}
          </option>
        ))}
      </select>
    </label>
  );
}
