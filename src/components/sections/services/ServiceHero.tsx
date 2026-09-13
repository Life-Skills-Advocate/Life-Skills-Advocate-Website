import React from 'react';
import Link from 'next/link';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  image?: string;
  primaryCTA?: { text: string; href: string };
}

export function ServiceHero({
  title,
  subtitle,
  description,
  image,
  primaryCTA,
}: ServiceHeroProps) {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24"
      role="region"
      aria-label="Service Hero Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Link
                href="/services"
                className="text-blue-100 hover:text-white font-medium mb-4 inline-flex items-center gap-2 transition-colors"
              >
                <span>←</span>
                Back to Services
              </Link>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              {subtitle && (
                <p className="text-xl text-blue-100 mb-4">{subtitle}</p>
              )}
            </div>

            {description && (
              <p className="text-lg text-blue-50 leading-relaxed">{description}</p>
            )}

            {primaryCTA && (
              <div className="pt-4">
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  {primaryCTA.text}
                </Link>
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="hidden md:block">
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
