import { siteConfig } from '@/data/site';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://northsummit.agency';

export function generateSEO({
  title,
  description = siteConfig.agency.description,
  path = '',
  image = '/images/og-image.jpg',
  type = 'website',
  publishedTime,
}: SEOProps = {}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.agency.domain}`
    : `${siteConfig.agency.domain} — ${siteConfig.agency.tagline}`;
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

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.agency.domain,
    description: siteConfig.agency.description,
    url: baseUrl,
    email: siteConfig.agency.email,
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.agency.domain,
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
    publisher: {
      '@type': 'Organization',
      name: siteConfig.agency.domain,
    },
    url: `${baseUrl}/blog/${post.slug}`,
  };
}
