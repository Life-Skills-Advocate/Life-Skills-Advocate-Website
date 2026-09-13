import React from 'react';

interface Highlight {
  title: string;
  description: string;
  icon?: string;
}

interface ResourceHighlightsProps {
  highlights: Highlight[];
  heading?: string;
}

export function ResourceHighlights({
  highlights,
  heading = 'Key Features',
}: ResourceHighlightsProps) {
  if (!highlights || highlights.length === 0) {
    return null;
  }

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      role="region"
      aria-label="Resource Highlights"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-blue-600 rounded-r-lg p-6 hover:shadow-lg transition-shadow"
          >
            {highlight.icon && (
              <div className="text-4xl mb-4">{highlight.icon}</div>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {highlight.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResourceHighlights;
