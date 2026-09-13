import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';

const pageMetadata = {
  title: 'Services | Life Skills Advocate',
  description:
    'Explore our comprehensive coaching services designed for neurodivergent individuals of all ages.',
  canonical: 'https://lifeskillsadvocate.com/services/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

const services = [
  {
    title: 'Executive Function Coaching',
    slug: 'executive-function-coaching',
    description: 'Professional coaching to develop executive functioning skills and strategies.',
    icon: '🧠',
  },
  {
    title: 'Academic Coaching',
    slug: 'academic-coaching',
    description: 'Support for students to succeed academically and develop study skills.',
    icon: '📚',
  },
  {
    title: 'Career Coaching',
    slug: 'career-coaching',
    description: 'Guidance for career exploration, job search, and workplace success.',
    icon: '💼',
  },
  {
    title: 'Life Skills Coaching',
    slug: 'life-skills-coaching',
    description: 'Practical skills for independent living and personal development.',
    icon: '🎯',
  },
  {
    title: 'Workbooks & Resources',
    slug: 'workbooks',
    description: 'Comprehensive self-guided resources and interactive workbooks.',
    icon: '📖',
  },
  {
    title: 'Free Tools & Assessments',
    slug: 'free-resources',
    description: 'Free assessments, worksheets, and guides to get started.',
    icon: '🆓',
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          Comprehensive coaching, resources, and support tailored for neurodivergent individuals at
          every life stage.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all group"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </Link>
        ))}
      </section>

      <section className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Book a complimentary 30-minute discovery call to discuss your goals and find the right
          service for you.
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}
