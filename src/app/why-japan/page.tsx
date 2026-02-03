import { Metadata } from 'next';
import { getFAQs, getFAQCategories } from '@/lib/data';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Why Japan Real Estate - Complete Guide for Foreign Buyers',
  description:
    'Everything you need to know about buying property in Japan as a foreigner. Learn about the buying process, taxes, financing, and more.',
};

export default function WhyJapanPage() {
  const faqs = getFAQs();
  const categories = getFAQCategories();

  const steps = [
    {
      number: '01',
      title: 'Property Search',
      description:
        'Browse listings online or work with an agent. Define your criteria: location, budget, property type, and purpose.',
    },
    {
      number: '02',
      title: 'Viewing & Selection',
      description:
        'View properties in person or virtually. Our team can conduct viewings on your behalf with detailed reports.',
    },
    {
      number: '03',
      title: 'Offer & Negotiation',
      description:
        'Submit a purchase application (買付証明書). The seller may accept, reject, or counter. No obligation at this stage.',
    },
    {
      number: '04',
      title: 'Contract & Deposit',
      description:
        'Sign the sales contract and pay 10% deposit. A cooling-off period may apply for certain transactions.',
    },
    {
      number: '05',
      title: 'Due Diligence',
      description:
        'Final inspections, document verification, and preparation for settlement. Typically 2-4 weeks.',
    },
    {
      number: '06',
      title: 'Settlement',
      description:
        'Pay remaining balance, receive keys, and complete ownership transfer registration. Congratulations!',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="absolute inset-0 pattern-asanoha opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Why Japan Real Estate?
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
            A complete guide to understanding and purchasing property in Japan
            as a foreign buyer.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Invest in Japan?"
            subtitle="Japan offers unique advantages for international property buyers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'No Foreign Restrictions',
                description:
                  'Foreigners can purchase property with the same rights as Japanese citizens. No visa, residency, or citizenship required.',
                icon: '🌏',
              },
              {
                title: 'Safe & Stable Market',
                description:
                  'Japan has a transparent legal system, low crime rates, and stable property rights. Your investment is well-protected.',
                icon: '🔒',
              },
              {
                title: 'Attractive Yields',
                description:
                  'Rental yields of 3-7% combined with some of the world\'s lowest interest rates create compelling investment opportunities.',
                icon: '📈',
              },
              {
                title: 'Weak Yen Opportunity',
                description:
                  'The historically weak yen makes Japanese real estate more affordable for foreign currency holders.',
                icon: '💱',
              },
              {
                title: 'Quality Construction',
                description:
                  'Japanese buildings are built to strict earthquake codes and maintained to high standards.',
                icon: '🏗️',
              },
              {
                title: 'World-Class Infrastructure',
                description:
                  'Excellent public transportation, healthcare, and services make Japan an ideal place to own property.',
                icon: '🚄',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-xl border border-border p-6">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-16 md:py-24 bg-card-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Buying Process"
            subtitle="A step-by-step overview of purchasing property in Japan."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-card rounded-xl border border-border p-6">
                <span className="text-4xl font-bold text-primary/20">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Costs to Consider"
            subtitle="Budget approximately 6-8% on top of the property price for buying costs."
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-card-hover">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Cost Item
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                      Approximate Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { item: 'Real Estate Agent Fee', amount: '3% + ¥60,000 + tax' },
                    { item: 'Registration Tax', amount: '1-2%' },
                    { item: 'Stamp Duty', amount: '¥10,000 - ¥60,000' },
                    { item: 'Legal/Scrivener Fees', amount: '¥100,000 - ¥300,000' },
                    { item: 'Property Acquisition Tax (paid later)', amount: '3-4%' },
                  ].map((row) => (
                    <tr key={row.item}>
                      <td className="px-6 py-4 text-sm text-muted">{row.item}</td>
                      <td className="px-6 py-4 text-sm text-foreground text-right font-medium">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about buying property in Japan."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.id}
                className="bg-card rounded-xl border border-border group"
              >
                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between">
                  <div>
                    <span className="text-xs text-primary font-medium">
                      {faq.category}
                    </span>
                    <h3 className="text-foreground font-medium mt-1">
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-white/80">
            Whether you&apos;re looking for a home, investment, or vacation property,
            we&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button
              href="/quiz"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-secondary"
            >
              Find Your Match
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-light text-xs">
            Disclaimer: The information provided on this page is for general
            informational purposes only and does not constitute legal, tax, or
            financial advice. Laws and regulations may change. Please consult
            with qualified professionals for advice specific to your situation.
          </p>
        </div>
      </section>
    </div>
  );
}
