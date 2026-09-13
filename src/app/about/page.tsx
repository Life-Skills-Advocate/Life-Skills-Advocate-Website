import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

const pageMetadata = {
  title: 'About | Life Skills Advocate',
  description:
    'Learn about Life Skills Advocate, our mission, values, and commitment to serving the neurodivergent community.',
  canonical: 'https://lifeskillsadvocate.com/about/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Life Skills Advocate</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Life Skills Advocate is dedicated to uplifting the neurodivergent community by providing
          exceptional coaching, resources, and support to help individuals embrace their strengths
          and develop essential life skills.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To empower neurodivergent individuals of all ages to become their own best advocates,
          equipped with the skills, confidence, and resources needed to thrive in school, work, and
          life.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Advocacy</h3>
            <p className="text-gray-600">
              We believe every individual deserves to have their voice heard and their needs met.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusivity</h3>
            <p className="text-gray-600">
              Neurodiversity is a strength. We celebrate differences and create spaces where everyone
              belongs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Empowerment</h3>
            <p className="text-gray-600">
              We equip individuals with practical skills and confidence to navigate life independently.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion</h3>
            <p className="text-gray-600">
              We approach every interaction with empathy, patience, and genuine care for our community.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="text-gray-600 text-center">
          Content from original site is being integrated. Check back soon for complete information.
        </p>
      </section>
    </div>
  );
}
