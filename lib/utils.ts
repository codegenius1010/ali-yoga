import clsx, { type ClassValue } from 'clsx';

/**
 * Combines classnames with tailwindcss merge
 * Prevents conflicting Tailwind classes from being applied
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Formats a date to a readable string
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formats a date range
 */
export function formatDateRange(startDate: Date | string, endDate: Date | string): string {
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  return `${start} – ${end}`;
}

/**
 * Slugifies a string for URLs
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates text to a specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Checks if code is running on the server
 */
export function isServer(): boolean {
  return typeof window === 'undefined';
}

/**
 * Checks if code is running on the client
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}
