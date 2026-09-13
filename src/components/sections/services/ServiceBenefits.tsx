import React from 'react';

interface Benefit {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  heading?: string;
  benefits: Benefit[];
  variant?: 'list' | 'grid';
}

export function ServiceBenefits({
  heading = "Why Choose Us",
  benefits,
  variant = 'list',
}: ServiceBenefitsProps) {
  return (
    <section
      className="bg-gray-50 py-16"
      role="region"
      aria-label="Service Benefits"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {heading}
          </h2>
        )}

        {variant === 'list' ? (
          <div className="space-y-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-blue-600 rounded-r-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-blue-600 font-bold">✓</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServiceBenefits;
