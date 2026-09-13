import React from 'react';

interface TeamMemberBioProps {
  heading?: string;
  content: string;
  credentials?: string[];
}

export function TeamMemberBio({
  heading = "About",
  content,
  credentials,
}: TeamMemberBioProps) {
  return (
    <section
      className="bg-gray-50 py-16"
      role="region"
      aria-label="Team Member Biography"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{heading}</h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {content}
          </p>
        </div>

        {credentials && credentials.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-300">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Credentials</h3>
            <ul className="space-y-2">
              {credentials.map((credential, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamMemberBio;
