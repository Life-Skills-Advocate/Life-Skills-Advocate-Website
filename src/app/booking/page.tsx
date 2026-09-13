import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

const pageMetadata = {
  title: 'Book a Coaching Session | Life Skills Advocate',
  description:
    'Book a complimentary 30-minute coaching discovery call to discuss your goals and find the right service for you.',
  canonical: 'https://lifeskillsadvocate.com/booking/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

export default function BookingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Book Your Complimentary Discovery Call
        </h1>
        <p className="text-lg text-gray-600">
          Let's talk about your goals and how we can support you on your journey.
        </p>
      </section>

      <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Call</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <div>
              <strong>30 minutes</strong> - Enough time to connect and explore your needs
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <div>
              <strong>Complimentary</strong> - No cost, no obligation
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <div>
              <strong>Virtual or In-Person</strong> - Your choice for comfort
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">✓</span>
            <div>
              <strong>Personalized</strong> - We'll discuss what matters most to you
            </div>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Schedule?</h2>
        <p className="text-gray-600 mb-6">
          Use the calendar below to find a time that works for you. Our coaches are available
          throughout the week.
        </p>
        <div className="bg-white border border-gray-300 rounded-lg p-8 min-h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Calendly booking widget will be integrated here
            </p>
            <p className="text-sm text-gray-500">
              Integration with Calendly or your preferred scheduling system coming soon
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions Before We Start?</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">What should I prepare?</h3>
            <p className="text-gray-600">
              Just come ready to discuss your goals! No preparation needed. We'll guide the
              conversation.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Who will I meet with?</h3>
            <p className="text-gray-600">
              One of our experienced coaches who specializes in the areas you're interested in
              exploring.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">What happens next?</h3>
            <p className="text-gray-600">
              After your call, we'll discuss options and next steps. No pressure—we want to make
              sure our services are a good fit for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
