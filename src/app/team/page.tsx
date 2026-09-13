import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';
import { teamConfigs } from '@/data/team-pages';

const pageMetadata = {
  title: 'Meet Our Team | Life Skills Advocate',
  description:
    'Meet the experienced coaches and professionals who make up the Life Skills Advocate team.',
  canonical: 'https://lifeskillsadvocate.com/team/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

// Build team members array from configurations
const teamMembers = Object.values(teamConfigs).map((config) => ({
  name: config.name,
  slug: config.slug,
  role: config.role,
  initials: config.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase(),
}));

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-600">
          Our experienced coaches are dedicated to helping neurodivergent individuals develop life
          skills and reach their full potential.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Link
            key={member.slug}
            href={`/team/${member.slug}`}
            className="group"
          >
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-full h-40 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{member.initials}</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
        <p className="text-gray-600 mb-6">
          Are you a passionate coach looking to make a difference in the neurodivergent community?
          We're always looking for talented individuals to join our team.
        </p>
        <Link
          href="/careers"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          View Open Positions
        </Link>
      </section>
    </div>
  );
}
