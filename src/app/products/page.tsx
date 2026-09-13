import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';
import { PRODUCT_PAGES } from '@/data/pages';

const pageMetadata = {
  title: 'Products & Workbooks | Life Skills Advocate',
  description:
    'Explore our collection of workbooks and resources designed to help you develop essential life skills.',
  canonical: 'https://lifeskillsadvocate.com/products/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Products & Workbooks
        </h1>
        <p className="text-lg text-gray-600">
          Self-paced workbooks and resources to develop life skills and executive functioning.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCT_PAGES.map((product) => (
          <Link
            key={product.slug || product.filename}
            href={product.route}
            className="group"
          >
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all h-full flex flex-col">
              {product.ogImage && (
                <div className="h-40 overflow-hidden bg-gray-100">
                  <img
                    src={product.ogImage}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.title.replace(' | Life Skills Advocate', '')}
                </h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                  Learn More <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {PRODUCT_PAGES.length === 0 && (
        <section className="text-center py-12">
          <p className="text-gray-600">Products are being prepared and will be available soon.</p>
        </section>
      )}

      <section className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started Today</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our workbooks are designed to help you develop practical skills and strategies at your
          own pace. Start your journey toward executive functioning success.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </section>
    </div>
  );
}
