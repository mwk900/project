import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import ContactForm from '@/components/ContactForm';
import portfolioData from '@/data/portfolio.json';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Get in touch for project inquiries, collaborations, or just to say hello."
        path="/contact"
      />

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Get In Touch</h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-4" />
            <p className="text-text-secondary">
              Have a project in mind or just want to say hello? Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <ContactForm />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12 pt-8 border-t border-border-color text-center">
            <p className="text-sm text-text-secondary mb-4">Or reach out directly</p>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.personal.email && !portfolioData.personal.email.startsWith('[') && (
                <a href={`mailto:${portfolioData.personal.email}`} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-color text-text-secondary hover:text-accent hover:border-accent transition-colors text-sm" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  {portfolioData.personal.email}
                </a>
              )}
              {portfolioData.social.linkedin && !portfolioData.social.linkedin.startsWith('[') && (
                <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-color text-text-secondary hover:text-accent hover:border-accent transition-colors text-sm" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              )}
            </div>
            {portfolioData.personal.email.startsWith('[') && (
              <p className="text-sm text-text-secondary mt-4">
                Configure your email in <code className="text-accent">src/data/portfolio.json</code>
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
