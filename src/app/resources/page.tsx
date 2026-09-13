import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';
import { RESOURCE_PAGES } from '@/data/pages';

const pageMetadata = {
  title: 'Resources & Guides | Life Skills Advocate',
  description:
    'Free and premium resources, guides, and tools for executive functioning and life skills development.',
  canonical: 'https://lifeskillsadvocate.com/resources/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources & Guides</h1>
        <p className="text-lg text-gray-600">
          Free and premium resources to support your executive functioning journey.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESOURCE_PAGES.map((resource) => (
          <Link
            key={resource.slug || resource.filename}
            href={resource.route}
            className="group"
          >
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all h-full">
              {resource.ogImage && (
                <div className="h-40 overflow-hidden bg-gray-100">
                  <img
                    src={resource.ogImage}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title.replace(' | Life Skills Advocate', '')}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{resource.description}</p>
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                  Learn More <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {RESOURCE_PAGES.length === 0 && (
        <section className="text-center py-12">
          <p className="text-gray-600">Resources are being organized and will be available soon.</p>
        </section>
      )}
    </div>
  );
}
