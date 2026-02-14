import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SEOHead from '@/components/SEOHead';
import ProjectCard from '@/components/ProjectCard';
import { generatePersonSchema, generateWebSiteSchema } from '@/utils/seo';
import portfolioData from '@/data/portfolio.json';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Home() {
  const featuredProjects = portfolioData.projects.slice(0, 3);

  return (
    <>
      <SEOHead jsonLd={[generatePersonSchema(), generateWebSiteSchema()]} />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-accent font-medium mb-4"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6"
              >
                {portfolioData.personal.name.startsWith('[')
                  ? 'Your Name Here'
                  : portfolioData.personal.name}
              </motion.h1>
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-lg sm:text-xl text-text-secondary max-w-lg mb-4"
              >
                {portfolioData.personal.title.startsWith('[')
                  ? 'Creative Professional & Developer'
                  : portfolioData.personal.title}
              </motion.p>
              <motion.p
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-text-secondary max-w-lg mb-8"
              >
                {portfolioData.personal.tagline}
              </motion.p>
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all"
                  style={{ color: 'var(--primary-bg)' }}
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent/20">
                <Image
                  src={portfolioData.personal.image}
                  alt={`Photo of ${portfolioData.personal.name}`}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-secondary-bg">
                  <span className="text-6xl text-text-secondary/30">
                    {portfolioData.personal.name.startsWith('[')
                      ? '?'
                      : portfolioData.personal.name[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-20" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            About What I Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            {portfolioData.personal.bio.startsWith('[')
              ? 'I design and build digital experiences that combine creativity with technical excellence. My work focuses on creating clean, accessible, and performant solutions that make a real impact.'
              : portfolioData.personal.bio}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/about"
              className="text-accent font-medium hover:underline inline-flex items-center gap-1.5"
            >
              Learn more about me
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Featured Work
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              A selection of recent projects showcasing my skills and approach.
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
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-color text-text-primary text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              View All Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
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
            Ready to work together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary mb-8"
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all"
              style={{ color: 'var(--primary-bg)' }}
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
