// Common types used throughout the application

export type PageVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type SectionSize = 'sm' | 'md' | 'lg';
export type Background = 'cream' | 'white' | 'olive' | 'none';

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  twitterHandle?: string;
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
