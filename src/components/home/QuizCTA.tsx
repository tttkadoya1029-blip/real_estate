import Button from '@/components/shared/Button';

export default function QuizCTA() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-asanoha opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
          <span className="text-accent text-sm font-medium">5 Questions</span>
          <span className="text-white/50">•</span>
          <span className="text-white/80 text-sm">2 minutes</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Not sure where to start?
        </h2>

        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Take our quick quiz to discover which Japanese regions and property
          types match your lifestyle, budget, and goals.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/quiz" variant="primary" size="lg">
            Start the Quiz
          </Button>
        </div>

        {/* Sample questions preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {[
            'What attracts you most to Japan?',
            "What's your ideal climate?",
            "What's your primary purpose?",
          ].map((question, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-4 backdrop-blur-sm"
            >
              <span className="text-accent text-sm font-medium">
                Q{index + 1}
              </span>
              <p className="mt-1 text-white/90 text-sm">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
