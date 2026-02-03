'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import { getAreas } from '@/lib/data';

const areas = [
  { slug: 'tokyo', name: 'Tokyo' },
  { slug: 'osaka', name: 'Osaka' },
  { slug: 'kyoto', name: 'Kyoto' },
  { slug: 'fukuoka', name: 'Fukuoka' },
  { slug: 'hokkaido', name: 'Hokkaido' },
  { slug: 'okinawa', name: 'Okinawa' },
  { slug: 'nagano', name: 'Nagano' },
  { slug: 'yokohama', name: 'Yokohama' },
  { slug: 'other', name: 'Other / Not Sure' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    purpose: '',
    budget: '',
    areas: [] as string[],
    timeline: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleAreaToggle = (areaSlug: string) => {
    setFormData((prev) => ({
      ...prev,
      areas: prev.areas.includes(areaSlug)
        ? prev.areas.filter((a) => a !== areaSlug)
        : [...prev.areas, areaSlug],
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-muted mb-8">
            We&apos;ve received your inquiry and will get back to you within 24-48
            hours. In the meantime, feel free to explore our resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="outline">
              Back to Home
            </Button>
            <Button href="/why-japan" variant="primary">
              Learn About Buying
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Tell us about your property goals and we&apos;ll help you find the
            perfect match in Japan.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Country of Residence *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., United States, Singapore, etc."
                />
              </div>
            </div>

            {/* Property Requirements */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Property Requirements
              </h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Purpose *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: 'residence', label: 'Primary Residence' },
                    { value: 'investment', label: 'Investment' },
                    { value: 'vacation', label: 'Vacation Home' },
                    { value: 'other', label: 'Other' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center justify-center px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                        formData.purpose === option.value
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="purpose"
                        value={option.value}
                        checked={formData.purpose === option.value}
                        onChange={(e) =>
                          setFormData({ ...formData, purpose: e.target.value })
                        }
                        className="sr-only"
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range *
                </label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your budget</option>
                  <option value="under-100k">Under $100,000</option>
                  <option value="100k-300k">$100,000 - $300,000</option>
                  <option value="300k-500k">$300,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="over-1m">Over $1,000,000</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Areas (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {areas.map((area) => (
                    <label
                      key={area.slug}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-colors ${
                        formData.areas.includes(area.slug)
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.areas.includes(area.slug)}
                        onChange={() => handleAreaToggle(area.slug)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          formData.areas.includes(area.slug)
                            ? 'bg-primary border-primary text-white'
                            : 'border-border'
                        }`}
                      >
                        {formData.areas.includes(area.slug) && (
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm">{area.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">When are you looking to buy?</option>
                  <option value="asap">As soon as possible</option>
                  <option value="3-months">Within 3 months</option>
                  <option value="6-months">Within 6 months</option>
                  <option value="1-year">Within 1 year</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Additional Information
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us more about what you're looking for, any specific requirements, questions, etc."
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Submit Inquiry
              </Button>
              <p className="mt-4 text-xs text-muted text-center">
                By submitting this form, you agree to receive communications
                from us. We respect your privacy and will not share your
                information.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
