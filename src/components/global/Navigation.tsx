'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface NavigationItem {
  href: string;
  label: string;
  children?: NavigationItem[];
}

interface NavigationProps {
  items: NavigationItem[];
  logo?: React.ReactNode;
}

export function Navigation({ items, logo }: NavigationProps) {
  return (
    <nav className="flex items-center justify-between gap-4">
      {logo && <div className="flex-shrink-0">{logo}</div>}
      <div className="flex items-center gap-8">
        {items.map((item) => (
          <NavItem
            key={item.href}
            item={item}
          />
        ))}
      </div>
    </nav>
  );
}

interface NavItemProps {
  item: NavigationItem;
}

function NavItem({ item }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-1">
        {item.label}
        <svg
          className="w-4 h-4 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navigation;
