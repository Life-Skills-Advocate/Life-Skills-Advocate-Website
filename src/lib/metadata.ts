import { Metadata } from 'next';
import { PageMetadata } from '@/types';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants';

/**
 * Generates Next.js Metadata from PageMetadata interface
 */
export function generateMetadata(pageData: PageMetadata): Metadata {
  return {
    title: pageData.title,
    description: pageData.description,
    alternates: {
      canonical: pageData.canonical || `${SITE_URL}/`,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: pageData.canonical || `${SITE_URL}/`,
      siteName: SITE_NAME,
      type: (pageData.ogType === 'article' ? 'article' : 'website') as 'website' | 'article',
      images: pageData.ogImage
        ? [
            {
              url: pageData.ogImage.url,
              width: pageData.ogImage.width,
              height: pageData.ogImage.height,
              alt: pageData.ogImage.alt || SITE_NAME,
              type: pageData.ogImage.type,
            },
          ]
        : [],
      publishedTime: pageData.publishedDate,
      modifiedTime: pageData.updatedDate,
    },
    twitter: {
      card: pageData.twitterCard || 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
      images: pageData.ogImage ? [pageData.ogImage.url] : [],
    },
  };
}

/**
 * Generates base metadata for all pages
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  keywords: ['executive functioning', 'coaching', 'neurodivergent', 'life skills'],
  authors: [{ name: SITE_NAME }],
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large',
  },
};
