import React from 'react';
import Link from 'next/link';

interface ProductPricingProps {
  heading?: string;
  currentPrice: number;
  originalPrice?: number;
  format?: string;
  includes?: string[];
  guarantee?: string;
}

export function ProductPricing({
  heading = "Pricing",
  currentPrice,
  originalPrice,
  format = "Digital PDF",
  includes = [
    "✓ Instant digital download",
    "✓ Print-friendly format",
    "✓ Lifetime access",
    "✓ 30-day money-back guarantee",
  ],
  guarantee,
}: ProductPricingProps) {
  const savings = originalPrice ? originalPrice - currentPrice : 0;
  const savingsPercent = originalPrice
    ? Math.round((savings / originalPrice) * 100)
    : 0;

  return (
    <section
      className="bg-gray-50 py-16"
      role="region"
      aria-label="Product Pricing"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {heading}
          </h2>
        )}

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Pricing Info */}
            <div>
              <div className="mb-8">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    ${currentPrice.toFixed(2)}
                  </span>
                  {originalPrice && (
                    <div>
                      <span className="text-2xl text-gray-500 line-through">
                        ${originalPrice.toFixed(2)}
                      </span>
                      <span className="ml-4 inline-block px-3 py-1 bg-red-100 text-red-700 font-bold rounded-full text-sm">
                        Save {savingsPercent}%
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600">{format}</p>
              </div>

              <div className="space-y-3 mb-8">
                {includes.map((item, index) => (
                  <p key={index} className="text-gray-700 flex items-start gap-3">
                    {item}
                  </p>
                ))}
              </div>

              {guarantee && (
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-blue-900 font-semibold">{guarantee}</p>
                </div>
              )}
            </div>

            {/* Purchase CTA */}
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                Get This Product
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
              >
                Have Questions?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPricing;
