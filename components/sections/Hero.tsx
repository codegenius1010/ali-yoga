import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { Container } from '../layout/Container';

interface HeroProps {
  headline: string;
  subheadline?: string;
  primaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  children?: ReactNode;
}

export function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundImage,
  children,
}: HeroProps) {
  return (
    <section
      className={clsx(
        'relative py-20 sm:py-32 lg:py-40 min-h-screen flex items-center',
        backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-b from-cream to-white'
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Overlay for readability if background image */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/65"></div>
      )}

      <Container className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
          {headline}
        </h1>

        {subheadline && (
          <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md" style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.8)' }}>
            {subheadline}
          </p>
        )}

        {children && <div className="mb-8">{children}</div>}

        {(primaryCta || secondaryCta) && (
          <div className="flex gap-4 justify-center flex-wrap">
            {primaryCta && primaryCta.href && (
              <Link
                href={primaryCta.href}
                className="btn btn-primary btn-large"
              >
                {primaryCta.label}
              </Link>
            )}
            {primaryCta && !primaryCta.href && (
              <button
                className="btn btn-primary btn-large"
                onClick={primaryCta.onClick}
              >
                {primaryCta.label}
              </button>
            )}
            {secondaryCta && secondaryCta.href && (
              <Link
                href={secondaryCta.href}
                className="btn btn-outline btn-large"
              >
                {secondaryCta.label}
              </Link>
            )}
            {secondaryCta && !secondaryCta.href && (
              <button
                className="btn btn-outline btn-large"
                onClick={secondaryCta.onClick}
              >
                {secondaryCta.label}
              </button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
