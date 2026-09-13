import React from 'react';
import Link from 'next/link';
import { Navigation, NavigationItem } from './Navigation';

interface HeaderProps {
  logoText?: string;
  navigationItems?: NavigationItem[];
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

const defaultNavItems: NavigationItem[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services/coaching', label: 'Coaching' },
      { href: '/services/workbooks', label: 'Workbooks' },
      { href: '/services/resources', label: 'Resources' },
    ],
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export function Header({
  logoText = 'Life Skills Advocate',
  navigationItems = defaultNavItems,
  showCTA = true,
  ctaText = 'Get Started',
  ctaHref = '/contact',
}: HeaderProps) {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 font-bold text-xl text-gray-900 hover:text-gray-700 transition-colors"
          >
            {logoText}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation
              items={navigationItems}
              logo={undefined}
            />
          </div>

          {/* CTA Button */}
          {showCTA && (
            <div className="hidden md:block">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {ctaText}
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
