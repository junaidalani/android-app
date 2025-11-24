"use client";

import * as z from "zod"; // Changed from 'import type * as z from "zod";'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { generateAyahInsights, type GenerateAyahInsightsInput } from "@/ai/flows/generate-ayah-insights";
import { Loader2, Sparkles } from "lucide-react";

const AyahFormSchema = z.object({
  ayahText: z.string().min(3, { message: "الرجاء إدخال نص آية صحيح." }),
});

type AyahFormValues = z.infer<typeof AyahFormSchema>;

export default function AyahInsightsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [insights, setInsights] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<AyahFormValues>({
    resolver: zodResolver(AyahFormSchema),
    defaultValues: {
      ayahText: "",
    },
  });

  async function onSubmit(data: AyahFormValues) {
    setIsLoading(true);
    setInsights(null);
    try {
      const input: GenerateAyahInsightsInput = { ayahText: data.ayahText };
      const result = await generateAyahInsights(input);
      setInsights(result.insights);
      toast({
        title: "تم بنجاح!",
        description: "تم استنباط البصائر بنجاح.",
      });
    } catch (error) {
      console.error("Error generating insights:", error);
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء استنباط البصائر. الرجاء المحاولة مرة أخرى.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-accent">
          <Sparkles className="h-7 w-7" />
          استكشف بصائر الآيات
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="ayahText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">أدخل نص الآية</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='مثال: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ"'
                      className="min-h-[100px] resize-y text-base bg-input/70 focus:bg-input"
                      {...field}
                      dir="rtl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto text-lg py-6 px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  جاري الاستنباط...
                </>
              ) : (
                "استنباط البصائر"
              )}
            </Button>
          </form>
        </Form>

        {isLoading && (
          <div className="mt-6 flex justify-center items-center p-6 bg-muted/50 rounded-md">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="mr-3 text-lg">جاري تحميل البصائر...</p>
          </div>
        )}

        {insights && !isLoading && (
          <Card className="mt-8 border-primary shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-primary">البصائر المستنبطة:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-md whitespace-pre-wrap leading-relaxed">{insights}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
