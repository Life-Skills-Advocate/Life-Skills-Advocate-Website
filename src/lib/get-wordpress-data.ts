/**
 * WordPress Data Helpers
 * Load and query extracted WordPress data from JSON files
 */

import { promises as fs } from 'fs';
import path from 'path';

export interface WordPressPage {
  id: number;
  title: string;
  slug: string;
  url: string;
  content: string;
  excerpt: string;
  author: string;
  published_date: string;
  modified_date: string;
  status: 'publish' | 'draft' | 'private';
  post_type: 'page' | 'post' | 'attachment';
  post_parent: number;
  menu_order: number;
  comments_open: boolean;
  ping_status: boolean;
  custom_meta: Record<string, any>;
}

export interface WordPressAuthor {
  id: number;
  login: string;
  email: string;
  display_name: string;
}

export interface WordPressIndex {
  total_pages: number;
  total_attachments: number;
  total_authors: number;
  extracted_date: string;
  pages: Array<{
    id: number;
    title: string;
    slug: string;
    url: string;
    status: string;
    published_date: string;
    author: string;
  }>;
}

const DATA_DIR = path.join(process.cwd(), 'src/data/wordpress');

// Cache for loaded data (optional, helps with performance)
let pageCache: Map<string, WordPressPage> = new Map();
let allPagesCache: WordPressPage[] = [];
let indexCache: WordPressIndex | null = null;
let authorsCache: WordPressAuthor[] = [];

/**
 * Get all pages at once
 * Good for filtering and mapping
 */
export async function getAllPages(): Promise<WordPressPage[]> {
  if (allPagesCache.length > 0) {
    return allPagesCache;
  }

  try {
    const filePath = path.join(DATA_DIR, 'all-pages.json');
    const data = await fs.readFile(filePath, 'utf-8');
    allPagesCache = JSON.parse(data);
    return allPagesCache;
  } catch (error) {
    console.error('Error loading all pages:', error);
    return [];
  }
}

/**
 * Get a single page by slug
 * Efficient for individual page loads
 */
export async function getPageBySlug(
  slug: string
): Promise<WordPressPage | null> {
  // Check cache first
  if (pageCache.has(slug)) {
    return pageCache.get(slug) || null;
  }

  try {
    const filePath = path.join(DATA_DIR, 'pages', `${slug}.json`);
    const data = await fs.readFile(filePath, 'utf-8');
    const page = JSON.parse(data) as WordPressPage;

    // Store in cache
    pageCache.set(slug, page);

    return page;
  } catch {
    return null;
  }
}

/**
 * Get page by WordPress post ID
 */
export async function getPageById(id: number): Promise<WordPressPage | null> {
  const pages = await getAllPages();
  return pages.find((p) => p.id === id) || null;
}

/**
 * Get all pages matching a status (publish, draft, private)
 */
export async function getPagesByStatus(
  status: 'publish' | 'draft' | 'private'
): Promise<WordPressPage[]> {
  const pages = await getAllPages();
  return pages.filter((p) => p.status === status);
}

/**
 * Get pages by author
 */
export async function getPagesByAuthor(author: string): Promise<WordPressPage[]> {
  const pages = await getAllPages();
  return pages.filter((p) => p.author === author);
}

/**
 * Search pages by title (case-insensitive)
 */
export async function searchPages(query: string): Promise<WordPressPage[]> {
  const pages = await getAllPages();
  const lowerQuery = query.toLowerCase();
  return pages.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.slug.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get team member pages (pages with specific slugs)
 */
export async function getTeamMembers(): Promise<WordPressPage[]> {
  const pages = await getAllPages();
  const teamSlugs = [
    'chris-hanson',
    'amy-kim-waschke',
    'danny-doyle',
    'eleanor-chapman',
    'heather-reed',
    'jennifer-schmidt',
    'jess-brady',
    'john-reilly',
    'karrissa-doree',
    'ket-buchholz',
    'kyle-mosler',
    'liz-makhramadzhyan',
    'morgan-hale',
    'nicole-castillo',
    'shannon-snow',
  ];

  return pages.filter((p) => teamSlugs.includes(p.slug));
}

/**
 * Get service pages
 */
export async function getServicePages(): Promise<WordPressPage[]> {
  const pages = await getAllPages();
  const serviceSlugs = [
    'executive-function-coaching',
    'executive-function-coaching-for-adults',
    'executive-function-coaching-for-college-students',
    'executive-function-coaching-for-high-school-students',
    'executive-function-coaching-for-young-adults',
    'academic-coaching-for-neurodivergent-minds',
    'career-coaching-for-neurodivergent-minds',
    'life-skills-coaching-for-neurodivergent-minds',
    'adhd-coaching',
    'back-to-school-executive-function-coaching',
    'summer-executive-function-coaching',
  ];

  return pages.filter((p) => serviceSlugs.includes(p.slug));
}

/**
 * Get product pages
 */
export async function getProductPages(): Promise<WordPressPage[]> {
  const pages = await getAllPages();
  const productSlugs = [
    'adulting-like-a-champ',
    'adulting-like-a-champ-bundle',
    'adulting-like-a-champ-workbook',
    'real-life-executive-functioning-workbook',
    'efs-real-life-executive-functioning-workbook',
    'the-real-life-executive-functioning-meal-plan',
    'the-neurodivergent-friendly-cookbook',
    'comprehensive-iep-goal-bank',
    'free-executive-functioning-worksheets',
    'free-executive-functioning-assessment',
  ];

  return pages.filter((p) => productSlugs.includes(p.slug));
}

/**
 * Get workbook pages (for teens & young adults)
 */
export async function getWorkbookPages(): Promise<WordPressPage[]> {
  const pages = await getAllPages();
  const workbookSlugs = [
    'active-listening-workbook',
    'asking-for-help-workbook',
    'assertive-communication-workbook',
    'conflict-management-workbook',
    'organizing-spaces-workbook',
    'planning-and-prioritizing-workbook',
    'setting-boundaries-workbook',
    'task-initiation-workbook',
    'time-management-workbook',
  ];

  return pages.filter((p) => workbookSlugs.includes(p.slug));
}

/**
 * Get all published pages sorted by date (newest first)
 */
export async function getPagesByDate(
  limit?: number
): Promise<WordPressPage[]> {
  const pages = await getAllPages();
  const published = pages.filter((p) => p.status === 'publish');

  // Sort by published_date descending
  published.sort(
    (a, b) =>
      new Date(b.published_date).getTime() -
      new Date(a.published_date).getTime()
  );

  return limit ? published.slice(0, limit) : published;
}

/**
 * Get page with related pages (same category)
 */
export async function getPageWithRelated(
  slug: string
): Promise<{ page: WordPressPage; related: WordPressPage[] } | null> {
  const page = await getPageBySlug(slug);
  if (!page) {
    return null;
  }

  // Determine category and get related pages
  let related: WordPressPage[] = [];

  if (slug.includes('team') || isTeamMember(slug)) {
    related = await getTeamMembers();
  } else if (slug.includes('service') || isServicePage(slug)) {
    related = await getServicePages();
  } else if (slug.includes('workbook') || isWorkbookPage(slug)) {
    related = await getWorkbookPages();
  } else if (slug.includes('product') || isProductPage(slug)) {
    related = await getProductPages();
  }

  // Remove current page from related
  related = related.filter((p) => p.slug !== slug);

  return { page, related };
}

/**
 * Get index metadata (quick lookups)
 */
export async function getIndex(): Promise<WordPressIndex | null> {
  if (indexCache) {
    return indexCache;
  }

  try {
    const filePath = path.join(DATA_DIR, 'index.json');
    const data = await fs.readFile(filePath, 'utf-8');
    indexCache = JSON.parse(data);
    return indexCache;
  } catch (error) {
    console.error('Error loading index:', error);
    return null;
  }
}

/**
 * Get all authors
 */
export async function getAuthors(): Promise<WordPressAuthor[]> {
  if (authorsCache.length > 0) {
    return authorsCache;
  }

  try {
    const filePath = path.join(DATA_DIR, 'authors.json');
    const data = await fs.readFile(filePath, 'utf-8');
    authorsCache = JSON.parse(data);
    return authorsCache;
  } catch (error) {
    console.error('Error loading authors:', error);
    return [];
  }
}

/**
 * Get single author by login
 */
export async function getAuthor(login: string): Promise<WordPressAuthor | null> {
  const authors = await getAuthors();
  return authors.find((a) => a.login === login) || null;
}

/**
 * Get all unique authors (from pages)
 */
export async function getUniquePagesAuthors(): Promise<string[]> {
  const pages = await getAllPages();
  const authors = new Set(pages.map((p) => p.author));
  return Array.from(authors);
}

/**
 * Get page count by author
 */
export async function getPageCountByAuthor(): Promise<
  Record<string, number>
> {
  const pages = await getAllPages();
  const counts: Record<string, number> = {};

  pages.forEach((p) => {
    counts[p.author] = (counts[p.author] || 0) + 1;
  });

  return counts;
}

/**
 * Helper functions to check page type
 */
function isTeamMember(slug: string): boolean {
  const teamSlugs = [
    'chris-hanson',
    'amy-kim-waschke',
    'danny-doyle',
    'eleanor-chapman',
    'heather-reed',
    'jennifer-schmidt',
    'jess-brady',
    'john-reilly',
    'karrissa-doree',
    'ket-buchholz',
    'kyle-mosler',
    'liz-makhramadzhyan',
    'morgan-hale',
    'nicole-castillo',
    'shannon-snow',
  ];
  return teamSlugs.includes(slug);
}

function isServicePage(slug: string): boolean {
  const serviceSlugs = [
    'executive-function-coaching',
    'academic-coaching-for-neurodivergent-minds',
    'career-coaching-for-neurodivergent-minds',
  ];
  return serviceSlugs.some((s) => slug.includes(s));
}

function isProductPage(slug: string): boolean {
  return slug.includes('workbook') || slug.includes('meal-plan') || slug.includes('cookbook');
}

function isWorkbookPage(slug: string): boolean {
  return slug.includes('workbook');
}

/**
 * Clear cache (useful for development)
 */
export function clearCache(): void {
  pageCache.clear();
  allPagesCache = [];
  indexCache = null;
  authorsCache = [];
}
