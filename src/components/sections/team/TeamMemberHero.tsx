import React from 'react';
import Link from 'next/link';

interface TeamMemberHeroProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  phone?: string;
}

export function TeamMemberHero({
  name,
  role,
  bio,
  image,
  email,
  phone,
}: TeamMemberHeroProps) {
  return (
    <section
      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24"
      role="region"
      aria-label="Team Member Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/team"
          className="text-blue-100 hover:text-white font-medium mb-4 inline-flex items-center gap-2 transition-colors"
        >
          <span>←</span>
          Back to Team
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-8">
          {/* Member Image */}
          <div className="md:col-span-1">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            ) : (
              <div className="w-full aspect-square bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-6xl font-bold">
                {name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            )}
          </div>

          {/* Member Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
              <p className="text-2xl text-blue-100">{role}</p>
            </div>

            <p className="text-lg text-blue-50 leading-relaxed">{bio}</p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
                >
                  <span className="text-2xl">✉️</span>
                  <span>{email}</span>
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
                >
                  <span className="text-2xl">📞</span>
                  <span>{phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMemberHero;
