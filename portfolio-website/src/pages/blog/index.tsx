import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';
import portfolioData from '@/data/portfolio.json';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function estimateReadTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function Blog() {
  const posts = [...portfolioData.blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <SEOHead
        title="Blog"
        description="Read my latest thoughts on web development, design, and creative projects."
        path="/blog"
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Blog</h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-4" />
            <p className="text-text-secondary">Thoughts, learnings, and insights from my journey.</p>
          </motion.div>

          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-6 rounded-xl border border-border-color transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 group"
                  style={{ backgroundColor: 'var(--secondary-bg)' }}
                >
                  <div className="flex items-center gap-3 text-xs text-text-secondary mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{post.category}</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>&middot;</span>
                    <span>{estimateReadTime(post.content)} min read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">{post.title}</h2>
                  <p className="text-sm text-text-secondary line-clamp-2">{post.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
