import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';
import portfolioData from '@/data/portfolio.json';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn more about ${portfolioData.personal.name} - ${portfolioData.personal.title}`}
        path="/about"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeIn} className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">About Me</h1>
            <div className="w-20 h-1 rounded-full bg-accent" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeIn} className="flex justify-center md:justify-start">
              <div className="relative w-48 h-48 rounded-xl overflow-hidden border-2 border-border-color">
                <Image
                  src={portfolioData.personal.image}
                  alt={`Photo of ${portfolioData.personal.name}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-secondary-bg">
                  <span className="text-5xl text-text-secondary/30">
                    {portfolioData.personal.name.startsWith('[') ? '?' : portfolioData.personal.name[0]}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeIn} className="md:col-span-2">
              <h2 className="text-xl font-semibold text-text-primary mb-3">
                Hi, I&apos;m {portfolioData.personal.name.startsWith('[') ? '[Your Name]' : portfolioData.personal.name}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {portfolioData.personal.bio.startsWith('[')
                  ? "I'm a [profession/title] passionate about [what excites you]. I create [what you create] that [value proposition]. With a background in [your background], I bring a unique perspective to every project I take on."
                  : portfolioData.personal.bio}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                When I&apos;m not working, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing what I&apos;ve learned through my blog. I believe in continuous learning and creating work that makes a difference.
              </p>
              <div className="flex gap-4">
                <Link href="/portfolio" className="px-5 py-2.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-opacity" style={{ color: 'var(--primary-bg)' }}>
                  View My Work
                </Link>
                <Link href="/contact" className="px-5 py-2.5 rounded-lg border border-border-color text-sm font-medium text-text-primary hover:border-accent hover:text-accent transition-colors">
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-2.5 rounded-lg border border-border-color text-sm font-medium text-text-primary hover:border-accent hover:text-accent transition-colors"
                  style={{ backgroundColor: 'var(--secondary-bg)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Connect</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'GitHub', url: portfolioData.social.github, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
                { name: 'LinkedIn', url: portfolioData.social.linkedin, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { name: 'Twitter', url: portfolioData.social.twitter, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              ].map((social) =>
                social.url && !social.url.startsWith('[') ? (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-color text-text-secondary hover:text-accent hover:border-accent transition-colors" style={{ backgroundColor: 'var(--secondary-bg)' }} aria-label={social.name}>
                    {social.icon}
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ) : null
              )}
            </div>
            {Object.values(portfolioData.social).every((v) => v.startsWith('[')) && (
              <p className="text-sm text-text-secondary mt-2">
                Social links will appear here once configured in <code className="text-accent">src/data/portfolio.json</code>
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
