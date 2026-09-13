import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

const pageMetadata = {
  title: 'Frequently Asked Questions | Life Skills Advocate',
  description:
    'Find answers to common questions about our coaching services, workbooks, and resources.',
  canonical: 'https://lifeskillsadvocate.com/faq/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 'q1',
    question: 'What is executive functioning?',
    answer:
      'Executive functioning refers to the mental processes that help us plan, organize, manage time, and accomplish tasks. These skills include working memory, flexibility, and impulse control.',
  },
  {
    id: 'q2',
    question: 'Who can benefit from coaching?',
    answer:
      'Our coaching services are designed for neurodivergent individuals of all ages—from high school students to adults. Whether you struggle with organization, time management, or task initiation, we can help.',
  },
  {
    id: 'q3',
    question: 'How do your coaching sessions work?',
    answer:
      'We offer individual coaching sessions tailored to your specific needs and goals. Sessions can be conducted in-person or virtually, depending on your preference.',
  },
  {
    id: 'q4',
    question: 'Are your workbooks available digitally?',
    answer:
      'Yes! All of our workbooks are available in digital format. You can access them immediately after purchase and work through them at your own pace.',
  },
  {
    id: 'q5',
    question: 'Do you offer a free consultation?',
    answer:
      'Absolutely! We offer a complimentary 30-minute discovery call to discuss your goals and determine if our services are a good fit for you.',
  },
  {
    id: 'q6',
    question: 'What is your refund policy?',
    answer:
      'We stand behind the quality of our services and resources. If you\'re not satisfied, please contact us within 30 days for a full refund.',
  },
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our coaching, resources, and services.
        </p>
      </section>

      <section className="space-y-6">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            className="group border border-gray-200 rounded-lg overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
              <h3 className="font-bold text-gray-900 text-lg">{faq.question}</h3>
              <svg
                className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </summary>
            <div className="p-6 bg-white border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </details>
        ))}
      </section>

      <section className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6">
          Can't find what you're looking for? Get in touch with our team and we'll be happy to
          help.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
