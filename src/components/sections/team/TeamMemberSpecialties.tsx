import React from 'react';

interface Specialty {
  title: string;
  description: string;
}

interface TeamMemberSpecialtiesProps {
  heading?: string;
  specialties: Specialty[];
}

export function TeamMemberSpecialties({
  heading = "Areas of Expertise",
  specialties,
}: TeamMemberSpecialtiesProps) {
  if (!specialties || specialties.length === 0) {
    return null;
  }

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      role="region"
      aria-label="Team Member Specialties"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-blue-600 rounded-r-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {specialty.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {specialty.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMemberSpecialties;
