'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getQuizQuestions, getAreaBySlug } from '@/lib/data';
import { calculateQuizResults, QuizAnswers, MAX_QUIZ_SCORE, getMatchPercentage } from '@/lib/quiz-logic';
import Button from '@/components/shared/Button';

export default function QuizPage() {
  const questions = getQuizQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: optionIndex,
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const results = showResults ? calculateQuizResults(answers) : [];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🎌</div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Perfect Match
            </h1>
            <p className="mt-4 text-muted">
              Based on your answers, here are the areas that best match your
              preferences.
            </p>
          </div>

          <div className="space-y-6">
            {results.map((result, index) => {
              const area = getAreaBySlug(result.area);
              if (!area) return null;

              const matchPercent = getMatchPercentage(result.score, MAX_QUIZ_SCORE);

              return (
                <div
                  key={result.area}
                  className={`bg-card rounded-xl border p-6 ${
                    index === 0 ? 'border-primary' : 'border-border'
                  }`}
                >
                  {index === 0 && (
                    <span className="inline-block bg-primary text-white text-xs font-medium px-2 py-1 rounded mb-4">
                      Best Match
                    </span>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {area.name}
                        <span className="text-muted ml-2 text-lg">
                          {area.nameJa}
                        </span>
                      </h2>
                      <p className="text-primary font-medium">{area.tagline}</p>
                      <p className="text-muted text-sm mt-2 line-clamp-2">
                        {area.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs bg-card-hover px-2 py-1 rounded">
                          {area.priceRange}
                        </span>
                        <span className="text-xs bg-card-hover px-2 py-1 rounded">
                          {result.propertyType}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                      <div className="text-3xl font-bold text-primary">
                        {matchPercent}%
                      </div>
                      <div className="text-xs text-muted">Match</div>
                      <Link
                        href={`/area/${area.slug}`}
                        className="mt-2 text-sm font-medium text-primary hover:underline"
                      >
                        Explore {area.name} →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-muted">
              Ready to take the next step?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us About These Areas
              </Button>
              <Button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                }}
                variant="outline"
                size="lg"
              >
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* Header */}
      <div className="py-4 px-4 flex items-center justify-between">
        <Link href="/" className="text-white/70 hover:text-white transition-colors">
          ← Back
        </Link>
        <span className="text-white/70 text-sm">
          {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="px-4">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {question.question}
          </h1>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                  answers[question.id] === index
                    ? 'border-primary bg-primary/20 text-white'
                    : 'border-white/20 hover:border-white/40 text-white/90 hover:bg-white/5'
                }`}
              >
                <span className="text-lg font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
