import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getGenres, getGenreBySlug, getAreasByGenre } from '@/lib/data';
import Card, { CardImage, CardContent, CardTitle, CardDescription } from '@/components/shared/Card';
import Button from '@/components/shared/Button';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const genres = getGenres();
  return genres.map((genre) => ({ slug: genre.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const genre = getGenreBySlug(slug);
  if (!genre) return { title: 'Genre Not Found' };

  return {
    title: `${genre.name} - Discover Japan`,
    description: genre.description,
    openGraph: {
      title: `${genre.name} - JapanHome`,
      description: genre.description,
    },
  };
}

export default async function GenrePage({ params }: Props) {
  const { slug } = await params;
  const genre = getGenreBySlug(slug);
  if (!genre) notFound();

  const areas = getAreasByGenre(slug);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-24 md:py-32"
        style={{ backgroundColor: `${genre.color}15` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/#genres"
              className="inline-flex items-center text-muted hover:text-foreground mb-6 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Categories
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {genre.name}
            </h1>
            <p
              className="mt-2 text-xl font-medium"
              style={{ color: genre.color }}
            >
              {genre.tagline}
            </p>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {genre.description}
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Explore {areas.length} {areas.length === 1 ? 'Area' : 'Areas'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Card key={area.slug} href={`/area/${area.slug}`}>
                <CardImage
                  src={area.heroImage}
                  alt={area.name}
                  aspectRatio="video"
                />
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-muted">
                      {area.nameJa}
                    </span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-muted">{area.priceRange}</span>
                  </div>
                  <CardTitle>{area.name}</CardTitle>
                  <p
                    className="text-sm font-medium mt-1"
                    style={{ color: genre.color }}
                  >
                    {area.tagline}
                  </p>
                  <CardDescription>{area.description}</CardDescription>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {area.highlights.slice(0, 2).map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs bg-card-hover px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {areas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">
                No areas found for this category yet.
              </p>
              <Button href="/" variant="outline" className="mt-4">
                Explore Other Categories
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Not sure which area is right for you?
          </h2>
          <p className="mt-4 text-muted">
            Take our quick quiz to find your perfect match based on your
            preferences and goals.
          </p>
          <div className="mt-8">
            <Button href="/quiz" variant="primary" size="lg">
              Take the Quiz
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
