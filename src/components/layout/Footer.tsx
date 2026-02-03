import Link from 'next/link';

const footerLinks = {
  explore: [
    { name: 'City Life', href: '/genre/city-life' },
    { name: 'Traditional Culture', href: '/genre/traditional-culture' },
    { name: 'Nature & Escape', href: '/genre/nature-escape' },
    { name: 'Investment', href: '/genre/investment' },
  ],
  areas: [
    { name: 'Tokyo', href: '/area/tokyo' },
    { name: 'Osaka', href: '/area/osaka' },
    { name: 'Kyoto', href: '/area/kyoto' },
    { name: 'Hokkaido', href: '/area/hokkaido' },
  ],
  resources: [
    { name: 'Why Japan Real Estate', href: '/why-japan' },
    { name: 'Find My Match Quiz', href: '/quiz' },
    { name: 'Properties', href: '/properties' },
    { name: 'Contact Us', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-primary">Japan</span>
                <span className="text-background">Home</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-light text-sm leading-relaxed">
              Your trusted partner for finding the perfect property in Japan.
              From Tokyo apartments to Kyoto machiya, we help you discover your
              ideal Japanese home.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-background mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-light hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Areas */}
          <div>
            <h3 className="font-semibold text-background mb-4">Popular Areas</h3>
            <ul className="space-y-3">
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-light hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-background mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-light hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-muted-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-light text-sm">
              © {new Date().getFullYear()} JapanHome. All rights reserved.
            </p>
            <p className="text-muted-light text-xs max-w-xl text-center md:text-right">
              Disclaimer: This website provides general information only and
              does not constitute legal, tax, or financial advice. Please
              consult qualified professionals for your specific situation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
