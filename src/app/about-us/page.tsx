
"use client"
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-provider'; // Assuming you have a language provider

export default function AboutUsPage() {
  const { language } = useLanguage(); // Get the current language

  const pageContent = {
    ar: {
      title: "من نحن",
      mainCard: {
        title: "من نحن",
        content: "بصائر المعرفة القرآنية مؤسسة تسعى لتقريب بصائر القرآن الحكيم وهداياته إلى الإنسان، وتتبنى بأفق قرآني البدائل العلمية والتعليمية والإعلامية لتكون سبيلا إلى رقي الإنسانية ونهوضها الحضاري."
      },
      cards: [
        {
          title: "رحلتك في رحاب هذه الاذكار لها ثلاثُ حالات:",
          content: "تطبيق اذكارك حياتك هو رفيقك اليومي لاستحضار ذكر الله في كل أوقاتك. نسعى لتقديم تجربة إيمانية غنية وسهلة الاستخدام، تجمع بين الأذكار المأثورة، المسبحة الإلكترونية، والمحتوى الإسلامي القيم لدعم رحلتك الروحية",
        },
        {
          title: "الحالة الاولى:",
          content: "اذكار الصباح و المساء، قبل شروق الشمس و قبل الغروب، وهي الاذكار المفضلة، و هذه ترددها عندما يكون لديك وقت واسع، او زمن فاضل كرمضان.",
        },
        {
          title: "الحالة الثانية:",
          content: "اذكار الصباح و المساء، قبل شروق الشمس و قبل غروبها، وهي الاذكار المختصرة.",
        },
        {
          title: "الحالة الثالثة:",
          content: "زوائدُ الأَذْكَارِ، وفيها زيادات على الأذكار المفصلة والمختصرة:عندما تكون معتكفًا، أو معتمرًا مثلًا، أو أردت مناجاة الله عز وجل بصورة أفسح وأرحب فلعلَّك تجد في هذه الزيادات ما تملأُ به قلبَك، وتشرح به صدرَك.في كلِّ ذلك ستتذوق طعم الحياة الحقيقية، فأذكارُك حياتُك، لأنها تعبِّرُ عن محبَّتك لربِّك عز وجل، ولأنك ستَسْعَد بثوابها العظيم.",
        },
      ]
    },
    en: {
      title: "Who We Are",
      mainCard: {
        title: "Who are we",
        content: "Insights of Quranic Knowledge is an institution that seeks to bring the insights of the Holy Qur'an and its gifts closer to man, and adopts with a Quranic horizon scientific, educational and media alternatives to be a way to the advancement of humanity and its civilizational advancement."
      },
      cards: [
        {
          title: "Your journey in the midst of these remembrances has three cases:",
          content: "Applying your remembrance of your life is your daily companion to evoke the remembrance of God at all times. We strive to provide a rich and easy-to-use faith experience, combining adhkaar, electronic rosary, and valuable Islamic content to support your spiritual journey.",
        },
        {
          title: "First case:",
          content: "Morning and evening remembrances, before sunrise and before sunset, are the favorite remembrances, and these are repeated when you have a large time, or a virtuous time such as Ramadan.",
        },
        {
          title: "Second case:",
          content: "Morning and evening remembrances, before sunrise and before sunset, which are the brief remembrances.",
        },
        {
          title: "Third case:",
          content: "When you are a retreat, or Umrah, for example, or you want to monologue God Almighty in a wider and more welcoming way, you may find in these increases what fills your heart, and explains your chest. In all of this, you will taste the taste of real life, for your remembrance is your life, because it expresses your love for your Lord Almighty, and because you will be happy with its great reward.",
        },
      ]
    }
  };

  const content = pageContent[language];

  return (
    <div className="flex flex-col min-h-[calc(100vh-var(--header-height,0px)-var(--footer-height,0px))]">
      <header className="bg-card text-card-foreground p-4 shadow-md sticky top-0 z-40 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold text-primary">{content.title}</h1>
          <Button variant="ghost" size="icon" asChild className="text-primary hover:bg-primary/10">
            <Link href="/">
              <ArrowRight className="h-6 w-6" />
              <span className="sr-only">Back to Home</span>
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="space-y-8">
          <Card className="w-full shadow-xl border-border/30 rounded-xl bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-center text-black">{content.mainCard.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-foreground/90 leading-relaxed px-6 md:px-8 py-6 text-right">
              <p>{content.mainCard.content}</p>
            </CardContent>
          </Card>

          {content.cards.map((card, index) => (
            <Card key={index} className="w-full shadow-xl border-border/30 rounded-xl bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-black text-right">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-md text-foreground/85 leading-relaxed px-6 md:px-8 py-6 text-right">
                <p className="whitespace-pre-line">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
