import portfolioData from '@/data/portfolio.json';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.netlify.app';

export function generateSEO({
  title,
  description = `${portfolioData.personal.name} - ${portfolioData.personal.title}. ${portfolioData.personal.bio}`,
  path = '',
  image = '/images/og-image.jpg',
  type = 'website',
  publishedTime,
}: SEOProps = {}) {
  const fullTitle = title
    ? `${title} | ${portfolioData.personal.name}`
    : `${portfolioData.personal.name} - ${portfolioData.personal.title} | Portfolio`;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    url,
    openGraph: {
      title: fullTitle,
      description,
      url,
      image: `${baseUrl}${image}`,
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image: `${baseUrl}${image}`,
    },
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.title,
    url: baseUrl,
    image: `${baseUrl}${portfolioData.personal.image}`,
    sameAs: [
      portfolioData.social.github,
      portfolioData.social.linkedin,
      portfolioData.social.twitter,
    ].filter((url) => url && !url.startsWith('[')),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${portfolioData.personal.name} Portfolio`,
    url: baseUrl,
  };
}

export function generateArticleSchema(post: {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: portfolioData.personal.name,
    },
    url: `${baseUrl}/blog/${post.slug}`,
  };
}
