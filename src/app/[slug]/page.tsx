import { notFound } from 'next/navigation';
import { getAllPages, getPageBySlug } from '@/lib/get-wordpress-data';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static parameters for all pages
 */
export async function generateStaticParams() {
  try {
    const pages = await getAllPages();
    return pages.map((page) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = await getPageBySlug(params.slug);

  if (!page) {
    return {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  // Extract SEO metadata from custom fields
  const metaDescription =
    page.custom_meta?._yoast_wpseo_metadesc ||
    page.custom_meta?.rank_math_description ||
    page.excerpt ||
    page.title;

  const metaKeywords =
    page.custom_meta?._yoast_wpseo_focuskw ||
    page.custom_meta?.rank_math_focus_keyword ||
    '';

  return {
    title: `${page.title} | Life Skills Advocate`,
    description: metaDescription,
    keywords: metaKeywords,
    openGraph: {
      title: page.title,
      description: metaDescription,
      type: 'website',
      url: page.url,
    },
  };
}

/**
 * Main page component - uses original WordPress HTML + CSS from extraction
 */
export default async function DynamicPage(props: PageProps) {
  const params = await props.params;
  const page = await getPageBySlug(params.slug);

  // Handle missing pages
  if (!page) {
    notFound();
  }

  // Get original WordPress content (cleaned version)
  const originalContent = page.content || '';

  // Get ALL original WordPress/Thrive CSS styles
  const customCSS = page.custom_meta?.tve_custom_css || '';
  const inlineCSS = page.custom_meta?._tve_base_inline_css || '';
  const allCSS = `
    /* Original WordPress Theme Styles */
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; }

    /* Original Thrive Styles */
    ${inlineCSS}

    /* Custom CSS from Page */
    ${customCSS}
  `;

  return (
    <>
      {/* Apply all original WordPress/Thrive styles */}
      <style dangerouslySetInnerHTML={{
        __html: allCSS,
      }} />

      {/* Main content wrapper */}
      <div style={{ width: '100%', minHeight: '100vh' }}>
        {/* Render original WordPress HTML content with styles */}
        <div
          dangerouslySetInnerHTML={{
            __html: originalContent,
          }}
        />
      </div>

      {/* Page metadata footer */}
      <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ccc', fontSize: '12px', color: '#666', padding: '20px' }}>
        <p><strong>Page:</strong> {page.title}</p>
        <p><strong>Slug:</strong> {page.slug}</p>
        <p><strong>URL:</strong> {page.url}</p>
        <p><strong>Published:</strong> {new Date(page.published_date).toLocaleDateString()}</p>
        <p><strong>Updated:</strong> {new Date(page.modified_date).toLocaleDateString()}</p>
        <p><strong>WordPress ID:</strong> {page.id}</p>
        <p><strong>Author:</strong> {page.author}</p>
      </div>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: page.title,
            url: page.url,
            datePublished: page.published_date,
            dateModified: page.modified_date,
          }),
        }}
      />
    </>
  );
}
