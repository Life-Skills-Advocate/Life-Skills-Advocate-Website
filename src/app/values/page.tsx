import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

const pageMetadata = {
  title: 'Core Values | Life Skills Advocate',
  description:
    'Learn about the core values that drive everything we do at Life Skills Advocate in support of the neurodivergent community.',
  canonical: 'https://lifeskillsadvocate.com/values/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

const values = [
  {
    title: 'Advocacy',
    icon: '🗣️',
    description:
      'We believe every individual deserves to have their voice heard and their needs met. We advocate for the neurodivergent community and empower individuals to advocate for themselves.',
  },
  {
    title: 'Inclusivity',
    icon: '🤝',
    description:
      'Neurodiversity is a strength. We celebrate differences and create spaces where everyone feels valued, respected, and included regardless of how their brain works.',
  },
  {
    title: 'Empowerment',
    icon: '💪',
    description:
      'We equip individuals with practical skills, strategies, and confidence to navigate life independently and achieve their goals.',
  },
  {
    title: 'Compassion',
    icon: '❤️',
    description:
      'We approach every interaction with empathy, patience, and genuine care for the individuals and families we serve.',
  },
  {
    title: 'Growth',
    icon: '🌱',
    description:
      'We believe in continuous learning and development. We support growth in our clients and within our team.',
  },
  {
    title: 'Authenticity',
    icon: '✨',
    description:
      'We celebrate authenticity and encourage individuals to embrace who they are. There is no "masking" required here.',
  },
];

export default function ValuesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          These values guide everything we do at Life Skills Advocate and inform how we serve the
          neurodivergent community.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value) => (
          <div
            key={value.title}
            className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4">{value.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h2>
            <p className="text-gray-600 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Promise to You</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We promise to uphold these values in every interaction, every coaching session, and every
          decision we make. We're committed to creating a world where neurodivergent individuals
          are not just accepted, but celebrated for their unique strengths and contributions.
        </p>
      </section>
    </div>
  );
}
