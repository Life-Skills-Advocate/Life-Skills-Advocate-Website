import React from 'react';

interface BlogContentProps {
  body: string;
}

export function BlogContent({ body }: BlogContentProps) {
  return (
    <article
      className="py-12 md:py-16"
      role="region"
      aria-label="Blog Post Content"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div
            className="text-gray-700 leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </div>
    </article>
  );
}

export default BlogContent;
