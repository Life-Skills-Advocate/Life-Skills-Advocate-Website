import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/metadata';
import { getAllBlogPosts } from '@/data/blog-posts';

const pageMetadata = {
  title: 'Blog | Life Skills Advocate',
  description:
    'Read articles and insights about executive functioning, life skills, neurodiversity, and coaching strategies.',
  canonical: 'https://lifeskillsadvocate.com/blog/',
  ogType: 'website' as const,
};

export const metadata: Metadata = generateMetadata(pageMetadata);

export default function Blog() {
  const blogPosts = getAllBlogPosts().sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Insights, strategies, and resources to help you thrive with executive functioning
          challenges.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                {post.category && (
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                )}
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <time className="text-sm text-gray-500">{post.publishedDate}</time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {blogPosts.length === 0 && (
        <section className="text-center py-12">
          <p className="text-gray-600">Blog posts are being prepared. Check back soon!</p>
        </section>
      )}
    </div>
  );
}
