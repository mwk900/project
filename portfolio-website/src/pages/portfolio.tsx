import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import ProjectCard from '@/components/ProjectCard';
import { siteConfig } from '@/data/site';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const childFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfolio"
        description="Browse our portfolio of websites built for trades and local businesses across the UK & Europe."
        path="/portfolio"
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Portfolio</h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-4" />
            <p className="text-text-secondary max-w-lg">
              Real websites we&apos;ve built for real businesses. Every project is live and generating results.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {siteConfig.projects.map((project) => (
              <motion.div key={project.id} variants={childFade}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
