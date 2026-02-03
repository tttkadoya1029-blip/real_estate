import type { QuizResult } from '@/types';
import { getQuizQuestions, getPropertyTypeMapping, getAreaBySlug } from './data';

export interface QuizAnswers {
  [questionId: number]: number; // questionId -> selected option index
}

export function calculateQuizResults(answers: QuizAnswers): QuizResult[] {
  const questions = getQuizQuestions();
  const propertyTypeMapping = getPropertyTypeMapping();

  // Calculate scores for each area
  const areaScores: Record<string, number> = {};

  Object.entries(answers).forEach(([questionIdStr, optionIndex]) => {
    const questionId = parseInt(questionIdStr);
    const question = questions.find((q) => q.id === questionId);

    if (question && question.options[optionIndex]) {
      const selectedOption = question.options[optionIndex];

      Object.entries(selectedOption.scores).forEach(([area, score]) => {
        areaScores[area] = (areaScores[area] || 0) + score;
      });
    }
  });

  // Sort areas by score and create results
  const sortedAreas = Object.entries(areaScores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3); // Top 3 results

  return sortedAreas.map(([areaSlug, score]) => {
    const propertyTypes = propertyTypeMapping[areaSlug] || ['Apartment'];
    return {
      area: areaSlug,
      propertyType: propertyTypes[0],
      score,
    };
  });
}

export function getResultDescription(result: QuizResult): string {
  const area = getAreaBySlug(result.area);
  if (!area) return '';

  return `${area.name} - ${area.tagline}`;
}

export function getMatchPercentage(score: number, maxPossibleScore: number): number {
  return Math.round((score / maxPossibleScore) * 100);
}

// Maximum possible score is 3 points per question * 5 questions = 15
export const MAX_QUIZ_SCORE = 15;
