import { Metadata } from 'next';
import { generateMetadata as generateMetadataHelper } from '@/lib/metadata';
import { RESOURCE_PAGES, getPageBySlug } from '@/data/pages';
import { getResourceConfig } from '@/data/resource-pages';
import {
  ResourceHero,
  ResourceHighlights,
  ResourceContent,
  ResourceCTA,
} from '@/components/sections/resources';

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RESOURCE_PAGES.filter((p) => p.slug).map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  const config = getResourceConfig(slug);

  if (!page) {
    return {
      title: 'Resource Not Found',
      description: 'The requested resource page could not be found.',
    };
  }

  const title = config ? config.title : page.title;
  const description = config ? config.description : page.description;

  return generateMetadataHelper({
    title,
    description,
    canonical: page.canonical,
    ogImage: page.ogImage ? { url: page.ogImage } : undefined,
  });
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const config = getResourceConfig(slug);

  // If no config exists, render fallback
  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Resource Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The resource you're looking for doesn't exist yet or is not configured.
          </p>
          <a
            href="/resources"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Resources
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <ResourceHero
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        description={config.hero.description}
        primaryCTA={config.hero.primaryCTA}
      />

      {config.highlights && (
        <ResourceHighlights
          highlights={config.highlights}
          heading="Key Features"
        />
      )}

      {config.content && (
        <ResourceContent
          heading={config.content.heading}
          body={config.content.body}
          sections={config.content.sections}
        />
      )}

      {config.cta && (
        <ResourceCTA
          heading={config.cta.heading}
          description={config.cta.description}
          primaryButton={config.cta.primaryButton}
          secondaryButton={config.cta.secondaryButton}
        />
      )}
    </>
  );
}
