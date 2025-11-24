
// This page is no longer directly linked from the sidebar.
// Its content or similar functionality can be accessed via the "الاذكار الجامعه" section.
// You can choose to delete this file if it's fully superseded,
// or keep it if you plan to link to it in some other way.

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AdhkarNoomRedirectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 text-center">
      <h1 className="text-3xl font-bold text-primary mb-6">أذكار النوم</h1>
      <p className="text-lg text-muted-foreground mb-8">
        يمكنك الآن العثور على أذكار النوم والمزيد ضمن قسم "الاذكار الجامعه".
      </p>
      <Button asChild size="lg">
        <Link href="/adhkar-jameah">
          <ArrowRight className="ml-2 rtl:mr-2 h-5 w-5 transform scale-x-[-1]" />
          الذهاب إلى الاذكار الجامعه
        </Link>
      </Button>
       <p className="mt-6 text-sm text-muted-foreground">
        أو
      </p>
      <Button variant="outline" asChild className="mt-2">
        <Link href="/">
          العودة إلى الرئيسية
        </Link>
      </Button>
    </div>
  );
}
