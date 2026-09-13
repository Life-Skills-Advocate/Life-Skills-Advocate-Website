export function cleanWordPressContent(html: string): string {
  if (!html) return '';

  let cleaned = html;

  cleaned = cleaned.replace(/\[tcb_[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\[\/?[a-zA-Z_][a-zA-Z0-9_-]*[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\s*style="[^"]*"/g, '');
  cleaned = cleaned.replace(/\s*data-[a-z-]*="[^"]*"/g, '');
  cleaned = cleaned.replace(/\s*data-[a-z-]*='[^']*'/g, '');
  cleaned = cleaned.replace(/\s*class="[^"]*thrive[^"]*"/g, '');
  cleaned = cleaned.replace(/\s*class="[^"]*tcb[^"]*"/g, '');
  cleaned = cleaned.replace(/\s*class="[^"]*tve[^"]*"/g, '');
  cleaned = cleaned.replace(/<span[^>]*>\s*<\/span>/g, '');
  cleaned = cleaned.replace(/<div[^>]*>\s*<\/div>/g, '');
  cleaned = cleaned.replace(/<!-- .* -->/g, '');
  cleaned = cleaned.replace(/\/\*[^*]*\*\//g, '');
  cleaned = cleaned.replace(/\s+/g, ' ');
  cleaned = cleaned.replace(/>\s+</g, '><');
  cleaned = decodeHTMLEntities(cleaned);

  return cleaned.trim();
}

function decodeHTMLEntities(text: string): string {
  if (typeof text !== 'string') return text;

  const ta = typeof document !== 'undefined' ? document.createElement('textarea') : null;

  if (ta) {
    ta.innerHTML = text;
    return ta.value;
  }

  let decoded = text;

  decoded = decoded.replace(/&lt;/g, '<');
  decoded = decoded.replace(/&gt;/g, '>');
  decoded = decoded.replace(/&amp;/g, '&');
  decoded = decoded.replace(/&quot;/g, '"');
  decoded = decoded.replace(/&#039;/g, "'");
  decoded = decoded.replace(/&nbsp;/g, ' ');

  decoded = decoded.replace(/&#(\d+);/g, (_match, dec) => {
    return String.fromCharCode(parseInt(dec, 10));
  });

  decoded = decoded.replace(/&#x([a-f0-9]+);/gi, (_match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });

  return decoded;
}

export function htmlToPlainText(html: string, maxLength?: number): string {
  let text = html.replace(/<[^>]*>/g, ' ');
  text = decodeHTMLEntities(text);
  text = text.replace(/\s+/g, ' ').trim();

  if (maxLength && text.length > maxLength) {
    text = text.substring(0, maxLength).trim() + '...';
  }

  return text;
}

export function getFirstParagraph(html: string): string {
  const paragraphMatch = html.match(/<p[^>]*>(.*?)<\/p>/i);
  if (paragraphMatch && paragraphMatch[1]) {
    return cleanWordPressContent(paragraphMatch[1]);
  }

  const text = htmlToPlainText(html, 160);
  return text;
}

export function getExcerpt(html: string, wordCount: number = 30): string {
  const plainText = htmlToPlainText(html);
  const words = plainText.split(/\s+/);
  const excerpt = words.slice(0, wordCount).join(' ');
  return excerpt + (words.length > wordCount ? '...' : '');
}

export function extractHeadings(
  html: string
): Array<{ level: number; text: string }> {
  const headings: Array<{ level: number; text: string }> = [];
  const headingRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gi;
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1][1], 10);
    const text = htmlToPlainText(match[2]);
    headings.push({ level, text });
  }

  return headings;
}

export function extractLinks(
  html: string
): Array<{ text: string; href: string }> {
  const links: Array<{ text: string; href: string }> = [];
  const linkRegex = /<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi;
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    const text = htmlToPlainText(match[2]);
    if (href && text) {
      links.push({ text, href });
    }
  }

  return links;
}

export function extractImages(
  html: string
): Array<{ src: string; alt: string }> {
  const images: Array<{ src: string; alt: string }> = [];
  const imgRegex = /<img[^>]*src="([^"]*)"[^>]*(?:alt="([^"]*)")?[^>]*>/gi;
  let match;

  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    const alt = match[2] || '';
    if (src) {
      images.push({ src, alt });
    }
  }

  return images;
}

export function makeImageUrlsRelative(
  html: string,
  domain: string = 'lifeskillsadvocate.com'
): string {
  return html.replace(
    new RegExp(`https?:\/\/${domain.replace(/\./g, '\\.')}`, 'g'),
    ''
  );
}

export function optimizeImagePaths(html: string): string {
  let optimized = html;
  optimized = optimized.replace(
    /(?:https?:\/\/[^\/]+)?\/wp-content\/uploads\//g,
    '/images/uploads/'
  );
  return optimized;
}

export function removeTrackingCode(html: string): string {
  let cleaned = html;
  cleaned = cleaned.replace(
    /<script[^>]*(?:google|analytics|hotjar|intercom|drift)[^>]*>.*?<\/script>/gi,
    ''
  );
  cleaned = cleaned.replace(/<img[^>]*(?:pixel|track)[^>]*>/gi, '');
  cleaned = cleaned.replace(/<noscript>.*?<\/noscript>/gi, '');
  return cleaned;
}

export function sanitizeHTML(html: string): string {
  let sanitized = html.replace(/\s*on\w+="[^"]*"/g, '');
  sanitized = sanitized.replace(/\s*on\w+='[^']*'/g, '');
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  sanitized = sanitized.replace(
    /<iframe(?!.*(?:youtube|vimeo))[^>]*>.*?<\/iframe>/gi,
    ''
  );
  return sanitized;
}

export function fullClean(
  html: string,
  options: {
    removeTacking?: boolean;
    sanitize?: boolean;
    optimizeImages?: boolean;
  } = {}
): string {
  const { removeTacking = true, sanitize = true, optimizeImages = true } = options;

  let cleaned = cleanWordPressContent(html);

  if (removeTacking) {
    cleaned = removeTrackingCode(cleaned);
  }

  if (sanitize) {
    cleaned = sanitizeHTML(cleaned);
  }

  if (optimizeImages) {
    cleaned = optimizeImagePaths(cleaned);
  }

  return cleaned;
}
