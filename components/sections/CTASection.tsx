import { ReactNode } from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

interface CTASectionProps {
  headline: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  children?: ReactNode;
  background?: 'cream' | 'olive' | 'gradient';
  centered?: boolean;
}

export function CTASection({
  headline,
  description,
  primaryCtaLabel = 'Get Started',
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  children,
  background = 'cream',
  centered = true,
}: CTASectionProps) {
  const bgClasses = {
    cream: 'bg-cream',
    olive: 'bg-deep-olive text-cream',
    gradient: 'bg-gradient-to-r from-deep-olive to-charcoal-brown text-cream',
  };

  return (
    <section className={`py-20 sm:py-28 ${bgClasses[background]}`}>
      <Container>
        <div className={centered ? 'text-center max-w-2xl mx-auto' : ''}>
          <h2 className={`text-4xl sm:text-5xl font-serif font-bold mb-6 ${
            background === 'cream' ? 'text-charcoal-brown' : ''
          }`}>
            {headline}
          </h2>

          {description && (
            <p className={`text-lg mb-8 leading-relaxed ${
              background === 'cream' ? 'text-deep-olive' : 'text-warm-sand'
            }`}>
              {description}
            </p>
          )}

          {children && <div className="mb-8">{children}</div>}

          {(primaryCtaLabel || secondaryCtaLabel) && (
            <div className="flex gap-4 justify-center flex-wrap">
              {primaryCtaLabel && (
                <Button
                  variant={background === 'cream' ? 'primary' : 'secondary'}
                  size="lg"
                >
                  {primaryCtaLabel}
                </Button>
              )}
              {secondaryCtaLabel && (
                <Button
                  variant={background === 'cream' ? 'outline' : 'ghost'}
                  size="lg"
                >
                  {secondaryCtaLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
