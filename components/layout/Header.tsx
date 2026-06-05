'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from './Container';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Private Coaching', href: '/private-yoga-coaching' },
  { label: 'Yoga for Golfers', href: '/yoga-for-golfers' },
  { label: 'Retreats', href: '/retreats' },
  { label: 'Online Courses', href: '/online-courses' },
  { label: 'About Ali', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-warm-sand">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-soft-clay to-golden-sun flex items-center justify-center">
              <svg className="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-charcoal-brown text-lg leading-none">Ali Yoga</span>
              <span className="text-xs text-soft-clay font-semibold tracking-wider">Freedom • Focus • Flow</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-deep-olive hover:text-soft-clay transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="btn btn-primary btn-small">
            Book a Session
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-warm-sand rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-warm-sand">
          <Container className="py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-deep-olive hover:text-soft-clay transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="btn btn-primary w-full mt-4">
              Book a Session
            </button>
          </Container>
        </div>
      )}
    </header>
  );
}
