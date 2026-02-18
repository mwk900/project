import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';
import ProjectCard from '@/components/ProjectCard';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/utils/seo';
import { siteConfig } from '@/data/site';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const childFade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const featuredProjects = siteConfig.projects.slice(0, 3);

  return (
    <>
      <SEOHead jsonLd={[generateOrganizationSchema(), generateWebSiteSchema()]} />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-accent font-medium mb-4"
            >
              Web design agency &middot; {siteConfig.agency.location}
            </motion.p>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6"
            >
              {siteConfig.agency.tagline}
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-lg sm:text-xl text-text-secondary max-w-xl mb-4"
            >
              {siteConfig.agency.description}
            </motion.p>
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-sm text-text-secondary max-w-xl mb-8 italic"
            >
              AI-assisted workflows + modern tooling for faster turnaround without compromising quality.
            </motion.p>
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
                  style={{ color: 'var(--primary-bg)' }}
                >
                  Get a quote
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a
                  href={`mailto:${siteConfig.agency.email}`}
                  className="inline-block px-6 py-3 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
                >
                  Email us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            What we do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            We build fast, conversion-focused websites for trades, local businesses, and agencies.
            From single-page sites to full platforms — designed to look great, load fast, and bring
            in customers.
          </motion.p>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              How it works
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              A simple 4-step process — no jargon, no fuss.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {siteConfig.process.map((item) => (
              <motion.div
                key={item.step}
                variants={childFade}
                className="p-6 rounded-xl border border-border-color"
                style={{ backgroundColor: 'var(--secondary-bg)' }}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Recent work
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Real sites we&apos;ve built for real businesses.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-color text-text-primary text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                View all projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Transparent pricing
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              No hidden fees. Pick a package or get in touch for something custom.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {siteConfig.pricing.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={childFade}
                className={`relative p-6 rounded-xl border ${
                  pkg.popular
                    ? 'border-accent shadow-lg shadow-accent/10'
                    : 'border-border-color'
                }`}
                style={{ backgroundColor: 'var(--secondary-bg)' }}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-xs font-semibold" style={{ color: 'var(--primary-bg)' }}>
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-text-primary mb-1">{pkg.name}</h3>
                <p className="text-3xl font-bold text-accent mb-2">
                  from {pkg.price}
                </p>
                <p className="text-sm text-text-secondary mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent mt-0.5 shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-lg text-sm font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-accent hover:opacity-90'
                        : 'border border-accent text-accent hover:bg-accent/10'
                    }`}
                    style={pkg.popular ? { color: 'var(--primary-bg)' } : undefined}
                  >
                    Get a quote
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary mb-8"
          >
            Drop us a message and we&apos;ll get back to you within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
                style={{ color: 'var(--primary-bg)' }}
              >
                Get a quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={`mailto:${siteConfig.agency.email}`}
                className="inline-block px-8 py-3.5 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
              >
                Email us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
