'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Private Coaching', href: '/private-coaching' },
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
      <Container className="flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="w-56">
            <Image
              src="/images/logos/ali-yoga-logo-concept-04-true-transparent.png"
              alt="Ali Yoga"
              width={280}
              height={100}
              priority
              unoptimized
              className="w-full h-auto"
            />
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
