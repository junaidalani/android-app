
// This page is no longer directly linked from the sidebar.
// "أذكار الاستيقاظ من النوم" is now the first item in "الاذكار الجامعه".
// You can choose to delete this file if it's fully superseded,
// or keep it if you plan to link to it in some other way.

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AdhkarIstiyqathRedirectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 text-center">
      <h1 className="text-3xl font-bold text-primary mb-6">أذكار الاستيقاظ من النوم</h1>
      <p className="text-lg text-muted-foreground mb-8">
        يمكنك الآن العثور على أذكار الاستيقاظ من النوم ضمن قسم "اذكار المناسبات".
      </p>
      <Button asChild size="lg">
        <Link href="/adhkar-jameah/istiyqath-min-alnoom">
          <ArrowRight className="ml-2 rtl:mr-2 h-5 w-5 transform scale-x-[-1]" />
           الذهاب إلى أذكار الاستيقاظ (في اذكار المناسبات)
        </Link>
      </Button>
      <p className="mt-6 text-sm text-muted-foreground">
        أو
      </p>
      <Button variant="outline" asChild className="mt-2">
        <Link href="/adhkar-jameah">
          الذهاب إلى قائمة اذكار المناسبات
        </Link>
      </Button>
    </div>
  );
}
