import React from 'react';

interface BlogHeroProps {
  title: string;
  excerpt: string;
  author?: string;
  publishedDate?: string;
  readTime?: string;
}

export function BlogHero({
  title,
  excerpt,
  author,
  publishedDate,
  readTime,
}: BlogHeroProps) {
  return (
    <section
      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 md:py-16"
      role="region"
      aria-label="Blog Post Hero"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

        <p className="text-xl text-blue-100 mb-6 leading-relaxed">{excerpt}</p>

        {(author || publishedDate || readTime) && (
          <div className="flex flex-wrap gap-4 text-blue-100 text-sm">
            {publishedDate && (
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>{publishedDate}</span>
              </div>
            )}
            {readTime && (
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                <span>{readTime} read</span>
              </div>
            )}
            {author && (
              <div className="flex items-center gap-2">
                <span>✍️</span>
                <span>{author}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogHero;
