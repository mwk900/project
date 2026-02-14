import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import ProjectCard from '@/components/ProjectCard';
import portfolioData from '@/data/portfolio.json';

export default function Portfolio() {
  const categories = ['All', ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Portfolio"
        description="Browse my portfolio of projects showcasing web development, design, and creative work."
        path="/portfolio"
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Portfolio</h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-4" />
            <p className="text-text-secondary max-w-lg">
              A collection of projects I&apos;ve worked on, showcasing my skills and passion for building great digital experiences.
            </p>
          </motion.div>

          {categories.length > 2 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-accent'
                      : 'bg-secondary-bg border border-border-color text-text-secondary hover:text-accent hover:border-accent'
                  }`}
                  style={activeCategory === cat ? { color: 'var(--primary-bg)' } : undefined}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
