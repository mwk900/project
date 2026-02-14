import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';
import { generateArticleSchema } from '@/utils/seo';
import portfolioData from '@/data/portfolio.json';
import type { GetStaticPaths, GetStaticProps } from 'next';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content: string;
}

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function estimateReadTime(content: string) {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: string[] = [];
  let inCodeBlock = false;
  let codeContent = '';

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          `<pre class="rounded-lg p-4 overflow-x-auto my-4 text-sm border border-border-color" style="background-color:var(--primary-bg)"><code>${codeContent}</code></pre>`
        );
        codeContent = '';
      }
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) {
      codeContent += escapeHtml(line) + '\n';
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(`<h2 class="text-xl font-bold text-text-primary mt-8 mb-4">${escapeHtml(line.slice(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      elements.push(`<h3 class="text-lg font-semibold text-text-primary mt-6 mb-3">${escapeHtml(line.slice(4))}</h3>`);
    } else if (line.startsWith('- ')) {
      const formatted = formatInline(line.slice(2));
      elements.push(`<li class="text-text-secondary ml-4 mb-1">${formatted}</li>`);
    } else if (/^\d+\.\s/.test(line)) {
      const formatted = formatInline(line.replace(/^\d+\.\s/, ''));
      elements.push(`<li class="text-text-secondary ml-4 mb-1 list-decimal">${formatted}</li>`);
    } else if (line.trim() === '') {
      elements.push('<br/>');
    } else {
      elements.push(`<p class="text-text-secondary leading-relaxed mb-4">${formatInline(line)}</p>`);
    }
  }

  return elements.join('\n');
}

function escapeHtml(str: string) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatInline(text: string) {
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>')
    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded text-sm" style="background-color:var(--primary-bg);color:var(--accent)">$1</code>');
}

export default function BlogPostPage({ post, relatedPosts }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="py-20 text-center"><p className="text-text-secondary">Loading...</p></div>;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        jsonLd={generateArticleSchema(post)}
      />

      <article className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Blog
            </Link>
          </motion.div>

          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <div className="flex items-center gap-3 text-xs text-text-secondary mb-4">
              <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{post.category}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>&middot;</span>
              <span>{estimateReadTime(post.content)} min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">{post.title}</h1>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-12 pt-8 border-t border-border-color">
            <p className="text-sm text-text-secondary mb-3">Share this article</p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border-color text-text-secondary hover:text-accent hover:border-accent transition-colors text-sm"
                aria-label="Share on Twitter"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border-color text-text-secondary hover:text-accent hover:border-accent transition-colors text-sm"
                aria-label="Share on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {relatedPosts.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 pt-8 border-t border-border-color">
              <h2 className="text-xl font-bold text-text-primary mb-6">Related Posts</h2>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block p-4 rounded-lg border border-border-color hover:border-accent/50 transition-colors group"
                    style={{ backgroundColor: 'var(--secondary-bg)' }}
                  >
                    <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">{related.title}</h3>
                    <p className="text-sm text-text-secondary mt-1">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = portfolioData.blogPosts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const post = portfolioData.blogPosts.find((p) => p.slug === params?.slug);
  if (!post) return { notFound: true };
  const relatedPosts = portfolioData.blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  return { props: { post, relatedPosts } };
};
