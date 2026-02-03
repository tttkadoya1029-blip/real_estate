import { Metadata } from 'next';
import { getProperties, getAreas } from '@/lib/data';
import Card, { CardImage, CardContent, CardTitle, CardDescription } from '@/components/shared/Card';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Properties - Browse Japanese Real Estate',
  description:
    'Explore our curated selection of Japanese properties. From Tokyo apartments to Kyoto machiya and ski resort condos.',
};

export default function PropertiesPage() {
  const properties = getProperties();
  const areas = getAreas();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-card-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Property Listings"
            subtitle="Explore our curated selection of Japanese properties across different regions and property types."
          />

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
              All
            </span>
            {areas.slice(0, 5).map((area) => (
              <span
                key={area.slug}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted hover:border-primary hover:text-primary cursor-pointer transition-colors"
              >
                {area.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
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
                    {property.bathrooms} bath • Built {property.yearBuilt}
                  </CardDescription>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {property.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-card-hover px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-card-hover">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted text-sm">
            These are sample listings to demonstrate property types and price
            ranges. Actual availability and prices vary. Contact us for current
            listings matching your requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Looking for something specific?
          </h2>
          <p className="mt-4 text-white/80">
            Tell us your requirements and we'll find properties that match your
            criteria.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Submit Your Requirements
            </Button>
            <Button
              href="/quiz"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-secondary"
            >
              Take the Quiz First
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
