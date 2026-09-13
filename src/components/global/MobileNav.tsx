'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NavigationItem } from './Navigation';

interface MobileNavProps {
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ items, isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      {/* Mobile menu backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-25 z-30"
        onClick={onClose}
      />

      {/* Mobile menu panel */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white z-40 overflow-y-auto shadow-lg">
        <div className="p-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="mb-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation items */}
          <nav className="space-y-4">
            {items.map((item) => (
              <MobileNavItem
                key={item.href}
                item={item}
                onClose={onClose}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

interface MobileNavItemProps {
  item: NavigationItem;
  onClose: () => void;
}

function MobileNavItem({ item, onClose }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium flex items-center justify-between transition-colors"
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
        <div className="pl-4 space-y-2 mt-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 text-sm transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileNav;
