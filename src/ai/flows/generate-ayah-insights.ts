'use server';
/**
 * @fileOverview An AI agent that generates insights for a given ayah of the Quran.
 *
 * - generateAyahInsights - A function that handles the ayah insights generation process.
 * - GenerateAyahInsightsInput - The input type for the generateAyahInsights function.
 * - GenerateAyahInsightsOutput - The return type for the generateAyahInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAyahInsightsInputSchema = z.object({
  ayahText: z.string().describe('The text of the ayah for which insights are requested.'),
});
export type GenerateAyahInsightsInput = z.infer<typeof GenerateAyahInsightsInputSchema>;

const GenerateAyahInsightsOutputSchema = z.object({
  insights: z.string().describe('The AI-generated insights for the given ayah.'),
});
export type GenerateAyahInsightsOutput = z.infer<typeof GenerateAyahInsightsOutputSchema>;

export async function generateAyahInsights(input: GenerateAyahInsightsInput): Promise<GenerateAyahInsightsOutput> {
  return generateAyahInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAyahInsightsPrompt',
  input: {schema: GenerateAyahInsightsInputSchema},
  output: {schema: GenerateAyahInsightsOutputSchema},
  prompt: `You are an AI assistant specializing in providing insights for Quranic ayahs.\n  Given the following ayah, generate relevant insights that deepen understanding of the Quran.\n  \n  Ayah: {{{ayahText}}}`,
});

const generateAyahInsightsFlow = ai.defineFlow(
  {
    name: 'generateAyahInsightsFlow',
    inputSchema: GenerateAyahInsightsInputSchema,
    outputSchema: GenerateAyahInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
