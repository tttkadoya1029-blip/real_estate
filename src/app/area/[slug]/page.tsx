import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAreas, getAreaBySlug, getPropertiesByArea } from '@/lib/data';
import Card, { CardImage, CardContent, CardTitle, CardDescription } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import SectionHeading from '@/components/shared/SectionHeading';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const areas = getAreas();
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return { title: 'Area Not Found' };

  return {
    title: `${area.name} (${area.nameJa}) - Real Estate Guide`,
    description: `${area.description} Price range: ${area.priceRange}`,
    openGraph: {
      title: `${area.name} Real Estate Guide - JapanHome`,
      description: area.description,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const properties = getPropertiesByArea(slug);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary">
        <div className="absolute inset-0 pattern-asanoha opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
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
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {area.name}
                </h1>
                <span className="text-2xl text-white/60">{area.nameJa}</span>
              </div>
              <p className="text-xl text-accent">{area.tagline}</p>
            </div>
            <div className="flex gap-3">
              <Button href="/contact" variant="primary">
                Inquire About {area.name}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted">Price Range</p>
              <p className="text-lg font-semibold text-foreground">
                {area.priceRange}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">Average Rent</p>
              <p className="text-lg font-semibold text-foreground">
                {area.averageRent}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">Airport Access</p>
              <p className="text-lg font-semibold text-foreground">
                {area.accessFromAirport}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">Safety Rating</p>
              <p className="text-lg font-semibold text-foreground">
                {'★'.repeat(area.safetyRating)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                About {area.name}
              </h2>
              <p className="text-muted leading-relaxed">{area.description}</p>

              {/* Highlights */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {area.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-muted"
                    >
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Seasons */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Seasons
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {area.seasons.map((season) => (
                    <div key={season.name} className="bg-card-hover rounded-lg p-4">
                      <p className="font-medium text-foreground">
                        {season.name}
                      </p>
                      <p className="text-sm text-muted mt-1">
                        {season.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fit Check Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Is {area.name} Right for You?
                </h3>

                <div className="mb-6">
                  <p className="text-sm font-medium text-primary mb-3">
                    Great for:
                  </p>
                  <ul className="space-y-2">
                    {area.fitFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="text-primary mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted mb-3">
                    May not be ideal for:
                  </p>
                  <ul className="space-y-2">
                    {area.notFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="text-muted mt-0.5">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button href="/quiz" variant="outline" className="w-full">
                    Take the Quiz
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-card-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={`Property Types in ${area.name}`}
            subtitle="Explore different property options available in this area."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {area.propertyTypes.map((pt) => (
              <div
                key={pt.type}
                className="bg-card rounded-xl border border-border p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {pt.type}
                </h3>
                <p className="text-primary font-medium mt-1">{pt.priceRange}</p>
                <p className="text-sm text-muted mt-3">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Properties */}
      {properties.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={`Properties in ${area.name}`}
              subtitle="Sample listings to give you an idea of what's available."
              align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.slice(0, 3).map((property) => (
                <Card key={property.id} hover>
                  <CardImage
                    src={property.image}
                    alt={property.title}
                    aspectRatio="video"
                  />
                  <CardContent>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                      {property.type}
                    </span>
                    <CardTitle className="mt-2">{property.title}</CardTitle>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-xl font-bold text-primary">
                        {property.price}
                      </span>
                      {property.investmentYield && (
                        <span className="text-sm text-muted">
                          {property.investmentYield} yield
                        </span>
                      )}
                    </div>
                    <CardDescription>
                      {property.size} • {property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} bed`}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button href="/properties" variant="outline">
                View All Properties
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Interested in {area.name}?
          </h2>
          <p className="mt-4 text-white/80">
            Let us help you find the perfect property. Share your requirements
            and we'll curate options for you.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
