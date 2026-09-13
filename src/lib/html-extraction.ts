/**
 * HTML Extraction Utilities
 * Clean and extract content from raw HTML files
 */

import fs from 'fs';
import path from 'path';

/**
 * Extract main content body from HTML
 */
export function extractBodyContent(html: string): string {
  // Try to find body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    return bodyMatch[1];
  }

  // Fallback: find main content area
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    return mainMatch[1];
  }

  return html;
}

/**
 * Extract hero section (first heading and paragraph)
 */
export function extractHeroSection(html: string): { title: string; subtitle: string } {
  const titleMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  const subtitleMatch = html.match(/<h1[^>]*>[\s\S]*?<\/h1>\s*<p[^>]*>([^<]+)<\/p>/i);

  return {
    title: titleMatch ? titleMatch[1].trim() : '',
    subtitle: subtitleMatch ? subtitleMatch[1].trim() : '',
  };
}

/**
 * Extract all heading-based sections
 */
export function extractSections(html: string): Array<{ heading: string; content: string }> {
  const sections: Array<{ heading: string; content: string }> = [];

  // Match sections with h2/h3 headings
  const regex = /<h[23][^>]*>([^<]+)<\/h[23]>([\s\S]*?)(?=<h[23]|$)/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    sections.push({
      heading: match[1].trim(),
      content: cleanHtml(match[2]).trim(),
    });
  }

  return sections;
}

/**
 * Clean HTML content
 */
export function cleanHtml(html: string): string {
  // Remove script and style tags
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Remove HTML comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');

  // Trim whitespace
  return html.trim();
}

/**
 * Read HTML file from templates directory
 */
export function readHtmlTemplate(filename: string): string {
  const filepath = path.join(process.cwd(), '_raw_templates', filename);
  try {
    return fs.readFileSync(filepath, 'utf-8');
  } catch (error) {
    console.error(`Failed to read template: ${filename}`, error);
    return '';
  }
}

/**
 * Extract all images from HTML
 */
export function extractImages(html: string): Array<{ src: string; alt: string }> {
  const images: Array<{ src: string; alt: string }> = [];
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;

  let match;
  while ((match = regex.exec(html)) !== null) {
    images.push({
      src: match[1],
      alt: match[2],
    });
  }

  return images;
}

/**
 * Extract contact/inquiry form if present
 */
export function extractForm(html: string): { has: boolean; action: string; fields: string[] } {
  const formMatch = html.match(/<form[^>]*>/i);
  if (!formMatch) {
    return { has: false, action: '', fields: [] };
  }

  const actionMatch = html.match(/<form[^>]*action=["']([^"']+)["'][^>]*>/i);
  const fields: string[] = [];

  // Extract input fields
  const inputRegex = /<input[^>]*name=["']([^"']+)["'][^>]*>/gi;
  let inputMatch;
  while ((inputMatch = inputRegex.exec(html)) !== null) {
    fields.push(inputMatch[1]);
  }

  return {
    has: true,
    action: actionMatch ? actionMatch[1] : '#',
    fields,
  };
}
