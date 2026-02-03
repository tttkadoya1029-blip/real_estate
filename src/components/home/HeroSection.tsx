import Button from '@/components/shared/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/80" />
      <div className="absolute inset-0 pattern-asanoha opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Discover Your
          <br />
          <span className="text-accent">Japanese Home</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          From vibrant Tokyo to serene Kyoto, find your perfect property in
          Japan. Whether you&apos;re seeking a lifestyle change, investment
          opportunity, or vacation retreat.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/quiz" variant="primary" size="lg">
            Find My Perfect Match
          </Button>
          <Button
            href="#genres"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-secondary"
          >
            Explore by Interest
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '8+', label: 'Regions' },
            { value: '100%', label: 'Foreign Ownership OK' },
            { value: '3-7%', label: 'Rental Yields' },
            { value: '24/7', label: 'Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
