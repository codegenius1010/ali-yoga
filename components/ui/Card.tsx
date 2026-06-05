import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
}

export function Card({ children, className, header, footer }: CardProps) {
  return (
    <div className={clsx('card', className)}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  link?: string;
  image?: string;
}

export function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl">
      {icon && <div className="mb-4 text-4xl">{icon}</div>}
      <h3 className="text-xl font-serif font-bold text-charcoal-brown mb-2 group-hover:text-soft-clay transition-colors">
        {title}
      </h3>
      <p className="text-deep-olive mb-4 leading-relaxed">{description}</p>
      {link && (
        <a href={link} className="inline-flex items-center text-soft-clay font-semibold hover:text-soft-clay/80 transition-colors">
          Learn more →
        </a>
      )}
    </Card>
  );
}
