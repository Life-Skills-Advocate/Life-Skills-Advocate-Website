import React from 'react';

interface ServiceContentProps {
  heading?: string;
  content: string;
  columns?: 1 | 2;
}

export function ServiceContent({
  heading,
  content,
  columns = 1,
}: ServiceContentProps) {
  const columnClass = columns === 2 ? 'md:columns-2 gap-8' : '';

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      role="region"
      aria-label="Service Content"
    >
      {heading && (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {heading}
        </h2>
      )}

      <div
        className={`prose prose-lg max-w-none ${columnClass}`}
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(content),
        }}
      />
    </section>
  );
}

/**
 * Basic HTML sanitization
 * Removes potentially dangerous tags while preserving formatting
 */
function sanitizeHtml(html: string): string {
  // Remove script and style tags
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Convert img tags to next/image compatible format
  html = html.replace(
    /<img\s+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/g,
    '<img src="$1" alt="$2" loading="lazy" />',
  );

  // Convert anchor tags to preserve them for styling
  html = html.replace(/href=["'](\/[^"']+)["']/g, 'href="$1"');

  return html;
}

export default ServiceContent;
