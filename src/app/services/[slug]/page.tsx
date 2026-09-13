import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { SERVICE_PAGES, getPageBySlug } from '@/data/pages';
import { getServiceConfig } from '@/data/service-pages';
import {
  ServiceHero,
  ServiceFeatures,
  ServiceBenefits,
  ServiceCTA,
} from '@/components/sections/services';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_PAGES.filter((p) => p.slug).map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.',
    };
  }

  return generatePageMetadata({
    title: page.title,
    description: page.description,
    canonical: page.canonical,
    ogImage: page.ogImage ? { url: page.ogImage } : undefined,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  const config = getServiceConfig(slug);

  if (!page) {
    notFound();
  }

  // If we have a config, use the structured component layout
  if (config) {
    return (
      <div>
        {/* Hero Section */}
        <ServiceHero
          title={config.hero.title}
          subtitle={config.hero.subtitle}
          description={page.description}
          image={page.ogImage}
          primaryCTA={config.hero.primaryCTA}
        />

        {/* Features Section */}
        {config.features && config.features.length > 0 && (
          <ServiceFeatures
            heading="What You'll Get"
            features={config.features}
            columns={4}
          />
        )}

        {/* Benefits Section */}
        {config.benefits && config.benefits.length > 0 && (
          <ServiceBenefits
            heading="Why Choose This Service"
            benefits={config.benefits}
            variant="grid"
          />
        )}

        {/* Content Section */}
        {config.content && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-lg max-w-none">
              <h2>{config.content.heading || 'About This Service'}</h2>
              <p>{config.content.body}</p>
            </div>
          </section>
        )}

        {/* CTA Section */}
        {config.cta && (
          <ServiceCTA
            heading={config.cta.heading}
            description={config.cta.description}
            primaryButton={config.cta.primaryButton}
            secondaryButton={config.cta.secondaryButton}
            variant="center"
          />
        )}
      </div>
    );
  }

  // Fallback for services without config
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{page.title.split(' | ')[0]}</h1>
          <p className="text-xl text-blue-100">{page.description}</p>
          {page.ogImage && (
            <img
              src={page.ogImage}
              alt={page.title}
              className="w-full h-auto rounded-lg mt-6"
            />
          )}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Details</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong>Note:</strong> Full service content is being integrated. This page displays
            the metadata extracted from the original site.
          </p>
          <p className="text-gray-600 mt-4">
            <strong>View Original:</strong>{' '}
            <a
              href={page.canonical}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              {page.canonical}
            </a>
          </p>
        </section>

        <ServiceCTA
          heading="Ready to Get Started?"
          description="Book a complimentary 30-minute discovery call to see if this service is right for you."
          primaryButton={{ text: 'Book Now', href: '/booking' }}
          secondaryButton={{ text: 'Contact Us', href: '/contact' }}
        />
      </div>
    </div>
  );
}
