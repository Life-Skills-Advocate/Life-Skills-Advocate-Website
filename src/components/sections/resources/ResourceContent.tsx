import React from 'react';

interface ContentSection {
  title: string;
  body: string;
}

interface ResourceContentProps {
  heading?: string;
  body: string;
  sections?: ContentSection[];
}

export function ResourceContent({
  heading = 'About This Resource',
  body,
  sections,
}: ResourceContentProps) {
  return (
    <section
      className="bg-gray-50 py-16"
      role="region"
      aria-label="Resource Content"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{heading}</h2>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {body}
          </p>
        </div>

        {sections && sections.length > 0 && (
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ResourceContent;
