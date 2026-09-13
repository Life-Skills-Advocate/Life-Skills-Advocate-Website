/**
 * Extract Metadata Script
 * Parses all HTML templates and extracts metadata for page generation
 * Run: npx ts-node scripts/extract-metadata.ts
 */

import fs from 'fs';
import path from 'path';

interface ExtractedPage {
  filename: string;
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType: string;
  route: string;
  slug?: string;
  category: 'service' | 'product' | 'resource' | 'blog' | 'team' | 'main' | 'other';
}

const TEMPLATES_DIR = path.join(process.cwd(), '_raw_templates');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'data', 'pages.ts');

// Ensure data directory exists
const DATA_DIR = path.join(process.cwd(), 'src', 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function extractMetadataFromHtml(html: string): Partial<ExtractedPage> {
  const metadata: Partial<ExtractedPage> = {};

  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    metadata.title = titleMatch[1].trim();
  }

  // Extract meta description
  const descMatch = html.match(/<meta\s+name=["']?description["']?\s+content=["']([^"']+)["']/i);
  if (descMatch) {
    metadata.description = descMatch[1];
  }

  // Extract canonical
  const canonMatch = html.match(/<link\s+rel=["']?canonical["']?\s+href=["']([^"']+)["']/i);
  if (canonMatch) {
    metadata.canonical = canonMatch[1];
  }

  // Extract OG image
  const ogImageMatch = html.match(/<meta\s+property=["']?og:image["']?\s+content=["']([^"']+)["']/i);
  if (ogImageMatch) {
    metadata.ogImage = ogImageMatch[1];
  }

  // Extract OG type
  const ogTypeMatch = html.match(/<meta\s+property=["']?og:type["']?\s+content=["']([^"']+)["']/i);
  if (ogTypeMatch) {
    metadata.ogType = ogTypeMatch[1];
  } else {
    metadata.ogType = 'website';
  }

  return metadata;
}

function fileNameToRoute(filename: string): { route: string; slug?: string; category: string } {
  // Remove timestamps pattern (8_30_2026 4：51：17 PM)
  let cleanName = filename.replace(/\s*\(\d{1,2}_\d{1,2}_\d{4}[^)]*\)\.html$/, '');

  // Remove " ｜ Life Skills Advocate" suffix
  cleanName = cleanName.replace(/\s*｜\s*Life Skills Advocate$/, '');

  // Special cases for known pages
  if (cleanName.toLowerCase().includes('home')) {
    return { route: '/', category: 'main' };
  }
  if (cleanName.toLowerCase().includes('contact')) {
    return { route: '/contact', category: 'main' };
  }
  if (cleanName.toLowerCase().includes('blog') && !cleanName.toLowerCase().includes('coaching')) {
    return { route: '/blog', category: 'main' };
  }
  if (cleanName.toLowerCase().includes('faq') || cleanName.toLowerCase().includes('frequently')) {
    return { route: '/faq', category: 'main' };
  }
  if (cleanName.toLowerCase().includes('careers')) {
    return { route: '/careers', category: 'main' };
  }
  if (cleanName.toLowerCase().includes('core values')) {
    return { route: '/values', category: 'main' };
  }
  if (cleanName.toLowerCase().includes('discover the difference')) {
    return { route: '/difference', category: 'main' };
  }

  // Team members
  if (cleanName.toLowerCase().startsWith('meet the team') && cleanName.length > 15) {
    const namePart = cleanName.replace(/^meet the team\s*[|｜]\s*/, '').trim();
    const slug = namePart
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    return { route: `/team/${slug}`, slug, category: 'team' };
  }
  if (cleanName.toLowerCase() === 'meet our team') {
    return { route: '/team', category: 'team' };
  }

  // Categorize by content type
  let category = 'other';
  let routePrefix = '';

  if (
    cleanName.toLowerCase().includes('coaching') ||
    cleanName.toLowerCase().includes('executive function coaching')
  ) {
    category = 'service';
    routePrefix = '/services';
  } else if (
    cleanName.toLowerCase().includes('workbook') ||
    cleanName.toLowerCase().includes('cookbook') ||
    cleanName.toLowerCase().includes('meal plan') ||
    cleanName.toLowerCase().includes('bundle')
  ) {
    category = 'product';
    routePrefix = '/products';
  } else if (
    cleanName.toLowerCase().includes('resource') ||
    cleanName.toLowerCase().includes('worksheets') ||
    cleanName.toLowerCase().includes('assessment') ||
    cleanName.toLowerCase().includes('iep goals') ||
    cleanName.toLowerCase().includes('tools') ||
    cleanName.toLowerCase().includes('skills') ||
    cleanName.toLowerCase().includes('neurodivergent')
  ) {
    category = 'resource';
    routePrefix = '/resources';
  }

  // Convert to slug
  const slug = cleanName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const route = routePrefix ? `${routePrefix}/${slug}` : `/page/${slug}`;

  return { route, slug, category };
}

function extractAllMetadata(): ExtractedPage[] {
  const files = fs.readdirSync(TEMPLATES_DIR).filter((f) => f.endsWith('.html'));

  console.log(`📂 Found ${files.length} HTML files to process...`);

  const pages: ExtractedPage[] = [];

  files.forEach((filename, index) => {
    try {
      const filePath = path.join(TEMPLATES_DIR, filename);
      const html = fs.readFileSync(filePath, 'utf-8');

      const metadata = extractMetadataFromHtml(html);
      const { route, slug, category } = fileNameToRoute(filename);

      const page: ExtractedPage = {
        filename,
        title: metadata.title || 'Untitled',
        description: metadata.description || '',
        canonical: metadata.canonical || `https://lifeskillsadvocate.com${route}`,
        ogImage: metadata.ogImage,
        ogType: metadata.ogType || 'website',
        route,
        slug,
        category: category as ExtractedPage['category'],
      };

      pages.push(page);

      if ((index + 1) % 10 === 0) {
        console.log(`  ✓ Processed ${index + 1}/${files.length} files...`);
      }
    } catch (error) {
      console.error(`  ✗ Error processing ${filename}:`, error);
    }
  });

  return pages;
}

function generateTypeScriptFile(pages: ExtractedPage[]): string {
  // Group pages by category
  const byCategory = pages.reduce(
    (acc, page) => {
      if (!acc[page.category]) {
        acc[page.category] = [];
      }
      acc[page.category].push(page);
      return acc;
    },
    {} as Record<string, ExtractedPage[]>,
  );

  // Sort each category
  Object.keys(byCategory).forEach((key) => {
    byCategory[key].sort((a, b) => a.route.localeCompare(b.route));
  });

  let content = `/**
 * AUTO-GENERATED: Page Metadata & Routes
 * Generated from HTML templates in _raw_templates/
 *
 * DO NOT EDIT MANUALLY
 * Regenerate with: npm run extract:metadata
 */

export interface Page {
  filename: string;
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType: 'website' | 'article' | 'product';
  route: string;
  slug?: string;
  category: 'service' | 'product' | 'resource' | 'blog' | 'team' | 'main' | 'other';
}

// ============================================
// MAIN PAGES
// ============================================

export const MAIN_PAGES: Page[] = ${JSON.stringify(byCategory['main'] || [], null, 2)};

// ============================================
// SERVICE/COACHING PAGES
// ============================================

export const SERVICE_PAGES: Page[] = ${JSON.stringify(byCategory['service'] || [], null, 2)};

// ============================================
// PRODUCT/WORKBOOK PAGES
// ============================================

export const PRODUCT_PAGES: Page[] = ${JSON.stringify(byCategory['product'] || [], null, 2)};

// ============================================
// RESOURCE/GUIDE PAGES
// ============================================

export const RESOURCE_PAGES: Page[] = ${JSON.stringify(byCategory['resource'] || [], null, 2)};

// ============================================
// TEAM PAGES
// ============================================

export const TEAM_PAGES: Page[] = ${JSON.stringify(byCategory['team'] || [], null, 2)};

// ============================================
// ALL PAGES
// ============================================

export const ALL_PAGES: Page[] = [
  ...MAIN_PAGES,
  ...SERVICE_PAGES,
  ...PRODUCT_PAGES,
  ...RESOURCE_PAGES,
  ...TEAM_PAGES,
  ...(${JSON.stringify(byCategory['other'] || [])} || []),
];

// ============================================
// LOOKUP FUNCTIONS
// ============================================

export function getPageByRoute(route: string): Page | undefined {
  return ALL_PAGES.find((p) => p.route === route);
}

export function getPageBySlug(slug: string): Page | undefined {
  return ALL_PAGES.find((p) => p.slug === slug);
}

export function getPagesByCategory(category: Page['category']): Page[] {
  return ALL_PAGES.filter((p) => p.category === category);
}

// ============================================
// STATISTICS
// ============================================

export const PAGE_STATS = {
  total: ${pages.length},
  byCategory: {
    main: ${byCategory['main']?.length || 0},
    service: ${byCategory['service']?.length || 0},
    product: ${byCategory['product']?.length || 0},
    resource: ${byCategory['resource']?.length || 0},
    team: ${byCategory['team']?.length || 0},
    other: ${byCategory['other']?.length || 0},
  },
};
`;

  return content;
}

async function main() {
  console.log('\n📋 Starting metadata extraction...\n');

  try {
    const pages = extractAllMetadata();

    console.log(`\n✅ Successfully extracted ${pages.length} pages\n`);

    // Generate TypeScript file
    const tsContent = generateTypeScriptFile(pages);

    // Ensure directory exists
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, tsContent);

    console.log(`📄 Generated: ${OUTPUT_FILE}\n`);

    // Print summary
    const byCategory = pages.reduce(
      (acc, page) => {
        acc[page.category] = (acc[page.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    console.log('📊 Summary by Category:');
    Object.entries(byCategory).forEach(([category, count]) => {
      console.log(`  ${category.padEnd(12)} ${count}`);
    });

    console.log('\n✨ Extraction complete!');
  } catch (error) {
    console.error('❌ Extraction failed:', error);
    process.exit(1);
  }
}

main();
