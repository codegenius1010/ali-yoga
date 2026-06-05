import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-olive text-cream mt-24">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 w-44">
              <Image
                src="/images/logos/ali-yoga-logo-concept-04-true-transparent.png"
                alt="Ali Yoga"
                width={176}
                height={60}
                unoptimized
                className="w-full h-auto"
              />
            </div>
            <p className="text-warm-sand text-sm leading-relaxed">
              Premium yoga coaching and wellness retreats designed for freedom, focus, and flow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
            <nav className="space-y-2">
              <Link href="/" className="text-warm-sand hover:text-cream transition-colors block">
                Home
              </Link>
              <Link href="/about" className="text-warm-sand hover:text-cream transition-colors block">
                About Ali
              </Link>
              <Link href="/blog" className="text-warm-sand hover:text-cream transition-colors block">
                Blog
              </Link>
              <Link href="/testimonials" className="text-warm-sand hover:text-cream transition-colors block">
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <nav className="space-y-2">
              <Link href="/private-coaching" className="text-warm-sand hover:text-cream transition-colors block">
                Private Coaching
              </Link>
              <Link href="/yoga-for-golfers" className="text-warm-sand hover:text-cream transition-colors block">
                Yoga for Golfers
              </Link>
              <Link href="/retreats" className="text-warm-sand hover:text-cream transition-colors block">
                Retreats
              </Link>
              <Link href="/online-courses" className="text-warm-sand hover:text-cream transition-colors block">
                Online Courses
              </Link>
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Ready to Begin?</h4>
            <p className="text-warm-sand text-sm mb-4">
              Book a free consultation to discuss your goals.
            </p>
            <button className="btn btn-secondary w-full">
              Book Now
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-deep-olive/50 pt-8">
          {/* Social Links */}
          <div className="flex gap-6 mb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-sand hover:text-cream transition-colors"
              aria-label="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-sand hover:text-cream transition-colors"
              aria-label="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-deep-olive/50">
            <p className="text-center text-warm-sand text-sm">
              © {currentYear} Ali Yoga. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
