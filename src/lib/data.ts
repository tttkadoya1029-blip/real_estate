import genresData from '@/data/genres.json';
import areasData from '@/data/areas.json';
import propertiesData from '@/data/properties.json';
import faqData from '@/data/faq.json';
import quizData from '@/data/quiz.json';
import type { Genre, Area, Property, FAQ, QuizQuestion } from '@/types';

// Genres
export function getGenres(): Genre[] {
  return genresData as Genre[];
}

export function getGenreBySlug(slug: string): Genre | undefined {
  return genresData.find((g) => g.slug === slug) as Genre | undefined;
}

// Areas
export function getAreas(): Area[] {
  return areasData as Area[];
}

export function getAreaBySlug(slug: string): Area | undefined {
  return areasData.find((a) => a.slug === slug) as Area | undefined;
}

export function getAreasByGenre(genreSlug: string): Area[] {
  const genre = getGenreBySlug(genreSlug);
  if (!genre) return [];
  return areasData.filter((a) => genre.relatedAreas.includes(a.slug)) as Area[];
}

// Properties
export function getProperties(): Property[] {
  return propertiesData as Property[];
}

export function getPropertiesByArea(areaSlug: string): Property[] {
  return propertiesData.filter((p) => p.area === areaSlug) as Property[];
}

export function getFeaturedProperties(limit: number = 6): Property[] {
  return (propertiesData as Property[]).slice(0, limit);
}

// FAQ
export function getFAQs(): FAQ[] {
  return faqData as FAQ[];
}

export function getFAQsByCategory(category: string): FAQ[] {
  return faqData.filter((f) => f.category === category) as FAQ[];
}

export function getFAQCategories(): string[] {
  return [...new Set(faqData.map((f) => f.category))];
}

// Quiz
export function getQuizQuestions(): QuizQuestion[] {
  return quizData.questions as QuizQuestion[];
}

export function getPropertyTypeMapping(): Record<string, string[]> {
  return quizData.propertyTypeMapping;
}
