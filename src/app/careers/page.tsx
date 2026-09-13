import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';

const pageMetadata = {
  title: 'Careers | Life Skills Advocate',
  description:
    'Join our team of passionate coaches dedicated to supporting the neurodivergent community. Explore career opportunities at Life Skills Advocate.',
  canonical: 'https://lifeskillsadvocate.com/careers/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

const openings = [
  {
    title: 'Executive Function Coach',
    description: 'Help individuals develop essential life skills and executive function strategies.',
  },
  {
    title: 'Academic Tutor',
    description: 'Support students in their academic journey with personalized guidance.',
  },
  {
    title: 'Career Coach',
    description: 'Guide individuals through career exploration and job search processes.',
  },
];

export default function CareersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600">
          We're looking for passionate professionals who want to make a difference in the lives of
          neurodivergent individuals.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Make an Impact</h3>
            <p className="text-gray-600">
              Work directly with individuals and families to create meaningful, lasting change.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Growth</h3>
            <p className="text-gray-600">
              Access ongoing training, mentorship, and opportunities to develop your coaching
              skills.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Supportive Culture</h3>
            <p className="text-gray-600">
              Join a team that values neurodiversity, inclusion, and work-life balance.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Positions</h2>
        <div className="space-y-6">
          {openings.map((opening) => (
            <div
              key={opening.title}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{opening.title}</h3>
                  <p className="text-gray-600">{opening.description}</p>
                </div>
                <Link
                  href="/contact"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Position?</h2>
        <p className="text-gray-600 mb-6">
          We're always interested in hearing from talented professionals. Send us your resume and a
          brief note about your interest in joining our team.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Send Your Application
        </Link>
      </section>
    </div>
  );
}
