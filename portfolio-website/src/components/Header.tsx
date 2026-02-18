import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { siteConfig } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${
        scrolled ? 'shadow-lg shadow-black/10' : ''
      }`}
      style={{ backgroundColor: 'var(--primary-bg)' }}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span
            className="inline-block w-7 h-7 rounded-md bg-accent"
            style={{
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            }}
            aria-hidden="true"
          />
          <span className="text-lg font-bold text-text-primary">
            {siteConfig.agency.name}
            <span className="text-accent">.agency</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {siteConfig.navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 text-sm font-medium transition-colors hover:text-accent ${
                router.pathname === link.href ||
                (link.href !== '/' && router.pathname.startsWith(link.href))
                  ? 'text-accent'
                  : 'text-text-secondary'
              }`}
            >
              {link.label}
              {(router.pathname === link.href ||
                (link.href !== '/' && router.pathname.startsWith(link.href))) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href={`mailto:${siteConfig.agency.email}`}
            className="px-4 py-2 text-sm font-medium text-text-secondary border border-border-color rounded-lg hover:text-accent hover:border-accent transition-colors"
          >
            Email us
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ color: 'var(--primary-bg)' }}
          >
            Get a quote
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-bg border border-border-color"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-text-primary"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border-color overflow-hidden"
            style={{ backgroundColor: 'var(--primary-bg)' }}
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {siteConfig.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    router.pathname === link.href
                      ? 'bg-secondary-bg text-accent'
                      : 'text-text-secondary hover:text-accent hover:bg-secondary-bg'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${siteConfig.agency.email}`}
                className="py-2 px-3 rounded-lg text-sm font-medium text-text-secondary hover:text-accent hover:bg-secondary-bg transition-colors"
              >
                Email us
              </a>
              <Link
                href="/contact"
                className="py-2 px-3 rounded-lg bg-accent text-sm font-semibold text-center"
                style={{ color: 'var(--primary-bg)' }}
              >
                Get a quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
