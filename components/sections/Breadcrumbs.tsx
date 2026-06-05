import Link from 'next/link';
import { Container } from '../layout/Container';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-sand py-4">
      <Container>
        <ol className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-soft-clay hover:text-soft-clay/80 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-charcoal-brown font-medium">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <svg
                  className="w-4 h-4 text-sage"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
