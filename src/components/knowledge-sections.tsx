import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookCopy, BookMarked, FileText, Milestone, Home } from "lucide-react"; 
import Link from "next/link";

interface Section {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

const sections: Section[] = [
   {
    id: "quran-sciences",
    title: "علوم القرآن",
    description: "استكشف مختلف علوم القرآن الكريم وتاريخه.",
    icon: BookCopy,
    href: "/علوم-القرآن",
  },
  {
    id: "tafsir",
    title: "التفسير",
    description: "تعمق في فهم معاني آيات القرآن الكريم من خلال التفاسير المعتمدة.",
    icon: BookMarked,
    href: "/التفسير",
  },
  {
    id: "hadith",
    title: "الحديث الشريف",
    description: "اكتشف أقوال وأفعال النبي صلى الله عليه وسلم.",
    icon: FileText,
    href: "/الحديث-الشريف",
  },
   {
    id: "seerah",
    title: "السيرة النبوية",
    description: "تعرف على حياة النبي محمد صلى الله عليه وسلم ومراحل دعوته.",
    icon: Milestone,
    href: "/السيرة-النبوية",
  },
];

export default function KnowledgeSections() {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent">
        أقسام المعرفة الإسلامية
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {sections.map((section) => (
          <Card key={section.id} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl border border-border/30">
            <CardHeader className="items-center text-center pt-8 pb-4">
              <section.icon className="h-12 w-12 md:h-14 md:w-14 mb-4 text-primary" />
              <CardTitle className="text-xl md:text-2xl font-semibold text-primary">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-8 px-6">
              <p className="text-muted-foreground mb-6 min-h-[60px] text-sm md:text-base">{section.description}</p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground w-full sm:w-auto rounded-md text-base py-2.5 px-6">
                <Link href={section.href}>استكشف الآن</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
