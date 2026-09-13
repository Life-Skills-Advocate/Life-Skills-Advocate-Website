import React from 'react';
import Link from 'next/link';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  copyright?: string;
  socialLinks?: Array<{ href: string; label: string; icon?: string }>;
}

const defaultSections: FooterSection[] = [
  {
    title: 'About',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/team', label: 'Our Team' },
      { href: '/careers', label: 'Careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services/coaching', label: 'Coaching' },
      { href: '/services/workbooks', label: 'Workbooks' },
      { href: '/services/resources', label: 'Resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy Policy' },
    ],
  },
];

const defaultSocialLinks = [
  { href: 'https://facebook.com/LifeSkillsAdvocate', label: 'Facebook' },
  { href: 'https://twitter.com', label: 'Twitter' },
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer({
  sections = defaultSections,
  copyright = '© 2024 Life Skills Advocate. All rights reserved.',
  socialLinks = defaultSocialLinks,
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Life Skills Advocate</h3>
            <p className="text-sm">
              Uplifting the neurodivergent community to embrace their strengths and self-advocate
              with confidence.
            </p>
          </div>

          {/* Link Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Social Links */}
          <div className="flex gap-6 mb-6 justify-center md:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left text-sm text-gray-400">{copyright}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
