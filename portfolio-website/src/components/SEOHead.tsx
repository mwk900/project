import Head from 'next/head';
import { generateSEO } from '@/utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEOHead({
  title,
  description,
  path,
  image,
  type,
  publishedTime,
  jsonLd,
}: SEOHeadProps) {
  const seo = generateSEO({ title, description, path, image, type, publishedTime });

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.openGraph.title} />
      <meta property="og:description" content={seo.openGraph.description} />
      <meta property="og:url" content={seo.openGraph.url} />
      <meta property="og:image" content={seo.openGraph.image} />
      <meta property="og:type" content={seo.openGraph.type} />
      {seo.openGraph.publishedTime && (
        <meta property="article:published_time" content={seo.openGraph.publishedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={seo.twitter.card} />
      <meta name="twitter:title" content={seo.twitter.title} />
      <meta name="twitter:description" content={seo.twitter.description} />
      <meta name="twitter:image" content={seo.twitter.image} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd),
          }}
        />
      )}
    </Head>
  );
}
