import React from 'react';
import Link from 'next/link';

interface ResourceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA?: { text: string; href: string };
}

export function ResourceHero({
  title,
  subtitle,
  description,
  primaryCTA,
}: ResourceHeroProps) {
  return (
    <section
      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24"
      role="region"
      aria-label="Resource Hero"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-2xl text-blue-100 mb-6">{subtitle}</p>
        <p className="text-lg text-blue-50 mb-8 max-w-2xl leading-relaxed">
          {description}
        </p>
        {primaryCTA && (
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            {primaryCTA.text}
          </Link>
        )}
      </div>
    </section>
  );
}

export default ResourceHero;
