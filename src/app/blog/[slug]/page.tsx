import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateMetadataHelper } from '@/lib/metadata';
import { getBlogPostConfig, getBlogPostNavigation, getAllBlogPosts } from '@/data/blog-posts';
import {
  BlogHero,
  BlogContent,
  BlogNavigation,
  BlogCTA,
} from '@/components/sections/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params from blog post configurations
export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostConfig(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return generateMetadataHelper({
    title: post.title,
    description: post.excerpt,
    ogType: 'article',
    publishedDate: post.publishedDate,
  });
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostConfig(slug);
  const { previous, next } = getBlogPostNavigation(slug);

  // If no config exists, render fallback
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <BlogHero
        title={post.title}
        excerpt={post.excerpt}
        author={post.author}
        publishedDate={post.publishedDate}
        readTime={post.readTime}
      />

      <BlogContent body={post.content} />

      {(previous || next) && (
        <BlogNavigation
          previousPost={previous ? { slug: previous.slug, title: previous.title } : undefined}
          nextPost={next ? { slug: next.slug, title: next.title } : undefined}
        />
      )}

      {post.cta && (
        <BlogCTA
          heading={post.cta.heading}
          description={post.cta.description}
          primaryButton={post.cta.primaryButton}
          secondaryButton={post.cta.secondaryButton}
        />
      )}

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            ← Back to All Posts
          </Link>
        </div>
      </section>
    </>
  );
}
