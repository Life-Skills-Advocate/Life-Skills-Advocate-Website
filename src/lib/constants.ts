/**
 * Application Constants
 */

export const SITE_NAME = 'Life Skills Advocate';
export const SITE_URL = 'https://lifeskillsadvocate.com';
export const SITE_DESCRIPTION =
  "Life Skills Advocate's mission: Uplifting the neurodivergent community to embrace their strengths and self-advocate with confidence.";

export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || '';
export const FORM_WEBHOOK_URL = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL || '';

// Navigation Links
export const MAIN_NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

// Social Links
export const SOCIAL_LINKS = [
  { href: 'https://facebook.com/LifeSkillsAdvocate', label: 'Facebook', icon: 'facebook' },
  { href: 'https://twitter.com', label: 'Twitter', icon: 'twitter' },
  { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
];

// Footer Links
export const FOOTER_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/contact', label: 'Contact' },
  { href: '/sitemap', label: 'Sitemap' },
];
