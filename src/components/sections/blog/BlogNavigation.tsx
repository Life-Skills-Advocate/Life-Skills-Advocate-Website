import React from 'react';
import Link from 'next/link';

interface NavPost {
  slug: string;
  title: string;
}

interface BlogNavigationProps {
  previousPost?: NavPost;
  nextPost?: NavPost;
}

export function BlogNavigation({
  previousPost,
  nextPost,
}: BlogNavigationProps) {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <section
      className="border-t border-gray-200 py-12"
      role="region"
      aria-label="Blog Navigation"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="group p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all"
            >
              <p className="text-sm text-gray-600 mb-2">← Previous Post</p>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {previousPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all text-right"
            >
              <p className="text-sm text-gray-600 mb-2">Next Post →</p>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {nextPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogNavigation;
