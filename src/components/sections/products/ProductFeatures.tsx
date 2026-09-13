import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface ProductFeaturesProps {
  heading?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function ProductFeatures({
  heading = "What's Included",
  features,
  columns = 3,
}: ProductFeaturesProps) {
  const columnClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      role="region"
      aria-label="Product Features"
    >
      {heading && (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {heading}
        </h2>
      )}

      <div className={`grid ${columnClass} gap-8`}>
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            {feature.icon && (
              <div className="text-4xl mb-4">{feature.icon}</div>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductFeatures;
