import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { PRODUCT_PAGES, getPageBySlug } from '@/data/pages';
import { getProductConfig } from '@/data/product-pages';
import {
  ProductHero,
  ProductFeatures,
  ProductPricing,
  ProductCTA,
} from '@/components/sections/products';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_PAGES.filter((p) => p.slug).map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {
      title: 'Product Not Found',
      description: 'The requested product page could not be found.',
    };
  }

  return generatePageMetadata({
    title: page.title,
    description: page.description,
    canonical: page.canonical,
    ogType: 'product',
    ogImage: page.ogImage ? { url: page.ogImage } : undefined,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  const config = getProductConfig(slug);

  if (!page) {
    notFound();
  }

  // If we have a config, use the structured component layout
  if (config) {
    return (
      <div>
        {/* Hero Section */}
        <ProductHero
          title={config.hero.title}
          subtitle={config.hero.subtitle}
          description={page.description}
          image={page.ogImage}
          price={config.price}
          primaryCTA={config.hero.primaryCTA}
        />

        {/* Features Section */}
        {config.features && config.features.length > 0 && (
          <ProductFeatures
            heading="What's Included in This Workbook"
            features={config.features}
            columns={4}
          />
        )}

        {/* Pricing Section */}
        <ProductPricing
          currentPrice={config.price}
          originalPrice={config.originalPrice}
          format={config.format}
          includes={config.pricing.includes}
          guarantee={config.pricing.guarantee}
        />

        {/* CTA Section */}
        {config.cta && (
          <ProductCTA
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

  // Fallback for products without config
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Details</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong>Note:</strong> Full product content is being integrated. This page displays
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

        <ProductCTA
          heading="Get This Product Now"
          description="Click below to purchase and get instant access to this resource."
          primaryButton={{ text: 'Purchase Now', href: '/' }}
          secondaryButton={{ text: 'Have Questions?', href: '/contact' }}
        />
      </div>
    </div>
  );
}
