import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-color" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span
                className="inline-block w-6 h-6 rounded-md bg-accent"
                style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
                aria-hidden="true"
              />
              <span className="text-lg font-bold text-text-primary">
                {siteConfig.agency.name}
                <span className="text-accent">.agency</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-text-secondary">
              {siteConfig.agency.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
              Get in touch
            </h3>
            <a
              href={`mailto:${siteConfig.agency.email}`}
              className="inline-block text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {siteConfig.agency.email}
            </a>
            <p className="mt-2 text-sm text-text-secondary">
              {siteConfig.agency.location}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-color text-center text-sm text-text-secondary">
          &copy; {currentYear} {siteConfig.agency.domain}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
