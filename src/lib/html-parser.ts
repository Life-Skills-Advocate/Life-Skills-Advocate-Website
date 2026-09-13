/**
 * HTML Parser Utilities
 * Extracts metadata and content from raw HTML templates
 */

export interface ExtractedMetadata {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterImage?: string;
  publishedDate?: string;
  updatedDate?: string;
  author?: string;
}

/**
 * Extract metadata from HTML head section
 */
export function extractMetadataFromHtml(html: string): ExtractedMetadata {
  const metadata: ExtractedMetadata = {};

  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    metadata.title = titleMatch[1].trim();
  }

  // Extract meta description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (descMatch) {
    metadata.description = descMatch[1];
  }

  // Extract canonical
  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (canonMatch) {
    metadata.canonical = canonMatch[1];
  }

  // Extract OG tags
  const ogTitleMatch = html.match(
    /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i,
  );
  if (ogTitleMatch) {
    metadata.ogTitle = ogTitleMatch[1];
  }

  const ogDescMatch = html.match(
    /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i,
  );
  if (ogDescMatch) {
    metadata.ogDescription = ogDescMatch[1];
  }

  const ogImageMatch = html.match(
    /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i,
  );
  if (ogImageMatch) {
    metadata.ogImage = ogImageMatch[1];
  }

  const ogTypeMatch = html.match(/<meta\s+property=["']og:type["']\s+content=["']([^"']+)["']/i);
  if (ogTypeMatch) {
    metadata.ogType = ogTypeMatch[1];
  }

  // Extract Twitter Card tags
  const twitterCardMatch = html.match(/<meta\s+name=["']twitter:card["']\s+content=["']([^"']+)["']/i);
  if (twitterCardMatch) {
    metadata.twitterCard = twitterCardMatch[1];
  }

  const twitterImageMatch = html.match(
    /<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i,
  );
  if (twitterImageMatch) {
    metadata.twitterImage = twitterImageMatch[1];
  }

  // Extract article meta tags
  const publishedMatch = html.match(
    /<meta\s+property=["']article:published_time["']\s+content=["']([^"']+)["']/i,
  );
  if (publishedMatch) {
    metadata.publishedDate = publishedMatch[1];
  }

  const updatedMatch = html.match(/<meta\s+property=["']article:modified_time["']\s+content=["']([^"']+)["']/i);
  if (updatedMatch) {
    metadata.updatedDate = updatedMatch[1];
  }

  const authorMatch = html.match(/<meta\s+property=["']article:author["']\s+content=["']([^"']+)["']/i);
  if (authorMatch) {
    metadata.author = authorMatch[1];
  }

  return metadata;
}

/**
 * Extract all text content from HTML (strips tags)
 */
export function extractTextContent(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extract main content from HTML body
 */
export function extractBodyContent(html: string): string {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : '';
}

/**
 * Map filename to route path
 */
export function fileNameToRoute(filename: string): string {
  // Remove timestamps and extension
  let cleanName = filename.replace(/\s*\(\d{1,2}_\d{1,2}_\d{4}.*\)\.html$/, '');

  // Remove " ｜ Life Skills Advocate" suffix
  cleanName = cleanName.replace(/\s*｜\s*Life Skills Advocate$/, '');

  // Convert to lowercase and replace spaces/special chars with hyphens
  const slug = cleanName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

  return `/${slug}`;
}
