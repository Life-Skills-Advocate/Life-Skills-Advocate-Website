import React from 'react';
import Link from 'next/link';

interface ProductCTAProps {
  heading?: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  variant?: 'center' | 'split';
}

export function ProductCTA({
  heading = "Ready to Transform Your Skills?",
  description = "Get instant access to this powerful resource.",
  primaryButton = { text: "Purchase Now", href: "/" },
  secondaryButton = { text: "Ask a Question", href: "/contact" },
  variant = 'center',
}: ProductCTAProps) {
  if (variant === 'split') {
    return (
      <section
        className="bg-blue-600 py-16 text-white"
        role="region"
        aria-label="Call to Action"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {heading}
              </h2>
              {description && (
                <p className="text-lg text-blue-100">{description}</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={primaryButton.href}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                {primaryButton.text}
              </Link>
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Center variant
  return (
    <section
      className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white"
      role="region"
      aria-label="Call to Action"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        {description && (
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButton.href}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            {primaryButton.text}
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductCTA;
