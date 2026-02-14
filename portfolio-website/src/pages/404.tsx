import Link from 'next/link';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

export default function Custom404() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." />

      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center px-4">
          <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-opacity" style={{ color: 'var(--primary-bg)' }}>
            Go Home
          </Link>
        </motion.div>
      </section>
    </>
  );
}
