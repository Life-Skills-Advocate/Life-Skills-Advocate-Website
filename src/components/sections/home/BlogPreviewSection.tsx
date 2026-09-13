'use client';

import Link from 'next/link';
import { getAllBlogPosts } from '@/data/blog-posts';

export function BlogPreviewSection() {
  const allPosts = getAllBlogPosts();
  const latestPosts = allPosts.slice(0, 3); // Get 3 most recent posts

  return (
    <section>
      <div>
        <div>
          <h2>From Our Blog</h2>
          <p>Research-based strategies and insights</p>
        </div>

        <div>
          {latestPosts.map((post) => (
            <article key={post.slug}>
              <div>
                <span>Blog Post Image</span>
              </div>
              <div>
                <div>
                  {new Date(post.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  Read Now →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div>
          <Link href="/blog">
            Visit Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
