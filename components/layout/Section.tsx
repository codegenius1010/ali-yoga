import { ReactNode } from 'react';
import clsx from 'clsx';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  background?: 'cream' | 'white' | 'olive' | 'none';
  id?: string;
}

export function Section({
  children,
  className,
  size = 'md',
  background = 'white',
  id,
}: SectionProps) {
  const sizeClasses = {
    sm: 'py-8 sm:py-12',
    md: 'py-16 sm:py-20 lg:py-24',
    lg: 'py-24 sm:py-32 lg:py-40',
  };

  const bgClasses = {
    cream: 'bg-cream',
    white: 'bg-white',
    olive: 'bg-deep-olive',
    none: '',
  };

  return (
    <section id={id} className={clsx(sizeClasses[size], bgClasses[background], className)}>
      <Container>
        {children}
      </Container>
    </section>
  );
}
