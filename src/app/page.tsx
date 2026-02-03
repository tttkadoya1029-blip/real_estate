import HeroSection from '@/components/home/HeroSection';
import GenreGrid from '@/components/home/GenreGrid';
import QuizCTA from '@/components/home/QuizCTA';
import { getFeaturedProperties } from '@/lib/data';
import Card, { CardImage, CardContent, CardTitle, CardDescription } from '@/components/shared/Card';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';

export default function Home() {
  const featuredProperties = getFeaturedProperties(6);

  return (
    <>
      <HeroSection />
      <GenreGrid />

      {/* Featured Properties */}
      <section className="py-24 bg-card-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Properties"
            subtitle="Hand-picked properties across Japan, from investment apartments to vacation homes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <Card key={property.id} hover>
                <CardImage
                  src={property.image}
                  alt={property.title}
                  aspectRatio="video"
                />
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                      {property.type}
                    </span>
                    <span className="text-xs text-muted capitalize">
                      {property.area}
                    </span>
                  </div>
                  <CardTitle>{property.title}</CardTitle>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {property.price}
                    </span>
                    {property.investmentYield && (
                      <span className="text-sm text-muted">
                        {property.investmentYield} yield
                      </span>
                    )}
                  </div>
                  <CardDescription>
                    {property.size} • {property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} bed`} •{' '}
                    Built {property.yearBuilt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/properties" variant="outline" size="lg">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      <QuizCTA />

      {/* Trust Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose JapanHome"
            subtitle="We make Japanese real estate accessible to international buyers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌏',
                title: 'No Restrictions',
                description:
                  'Foreigners can buy property in Japan with the same rights as locals. No visa required.',
              },
              {
                icon: '🔒',
                title: 'Safe & Stable',
                description:
                  'Japan offers one of the safest real estate markets with transparent regulations.',
              },
              {
                icon: '📈',
                title: 'Strong Yields',
                description:
                  'Rental yields of 3-7% with some of the world\'s lowest interest rates.',
              },
              {
                icon: '🤝',
                title: 'Full Support',
                description:
                  'Bilingual support throughout your buying journey, from search to settlement.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/why-japan" variant="secondary" size="lg">
              Learn More About Buying in Japan
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
