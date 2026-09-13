/**
 * Global Type Definitions
 * Shared interfaces and types for the Life Skills Advocate site
 */

export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
  ariaLabel?: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    type?: string;
  };
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  publishedDate?: string;
  updatedDate?: string;
  author?: string;
}

export interface FormData {
  [key: string]: string | number | boolean;
}

export interface FormFieldConfig {
  name: string;
  type: 'text' | 'email' | 'phone' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
}

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon?: string;
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  slug: string;
  specialties?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  publishedDate: string;
  updatedDate?: string;
  author?: string;
  featured?: boolean;
  categories?: string[];
  thumbnail?: string;
}
