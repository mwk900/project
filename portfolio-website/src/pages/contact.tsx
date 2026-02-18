import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/data/site';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Get in touch for a free quote. We build websites for trades and local businesses across the UK & Europe."
        path="/contact"
      />

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Get a quote</h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-4" />
            <p className="text-text-secondary">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <ContactForm />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12 pt-8 border-t border-border-color text-center">
            <p className="text-sm text-text-secondary mb-4">Or reach out directly</p>
            <a
              href={`mailto:${siteConfig.agency.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-color text-text-secondary hover:text-accent hover:border-accent transition-colors text-sm"
              style={{ backgroundColor: 'var(--secondary-bg)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {siteConfig.agency.email}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
