/**
 * Design Tokens for Ali Yoga
 * Central source for all design constants
 */

export const colors = {
  // Primary Brand Colors
  cream: '#FAF7F0',
  warmSand: '#E8D8C3',
  deepOlive: '#3F4A36',
  softClay: '#B9866B',
  charcoalBrown: '#2B2520',
  sage: '#A8B8A0',
  goldenSun: '#D8A84E',

  // Semantic Colors
  background: '#FAF7F0', // cream
  surface: '#FFFFFF',
  text: {
    primary: '#2B2520', // charcoal-brown
    secondary: '#3F4A36', // deep-olive
    muted: '#A8B8A0', // sage
    light: '#E8D8C3', // warm-sand
  },
  accent: {
    primary: '#D8A84E', // golden-sun
    secondary: '#B9866B', // soft-clay
  },
  interactive: {
    default: '#B9866B', // soft-clay
    hover: '#A07A5D',
    active: '#2B2520', // charcoal-brown
    disabled: '#A8B8A0', // sage
  },
  border: '#E8D8C3', // warm-sand
  divider: '#E8D8C3', // warm-sand
} as const;

export const typography = {
  // Font families
  headings: 'Merriweather, Georgia, serif',
  bodyFont: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',

  // Heading styles
  h1: {
    fontSize: '3rem',
    lineHeight: '1',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '2.25rem',
    lineHeight: '1.2',
    fontWeight: 700,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: '1.875rem',
    lineHeight: '1.25',
    fontWeight: 600,
  },
  h4: {
    fontSize: '1.5rem',
    lineHeight: '1.33',
    fontWeight: 600,
  },
  h5: {
    fontSize: '1.25rem',
    lineHeight: '1.4',
    fontWeight: 600,
  },
  h6: {
    fontSize: '1rem',
    lineHeight: '1.5',
    fontWeight: 600,
  },

  // Body styles
  body: {
    fontSize: '1rem',
    lineHeight: '1.6',
    fontWeight: 400,
  },
  bodySmall: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontWeight: 400,
  },
  bodyLarge: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    fontWeight: 400,
  },

  // Special styles
  caption: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },
} as const;

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '5rem',
  '5xl': '6rem',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(43, 37, 32, 0.05)',
  md: '0 4px 6px -1px rgba(43, 37, 32, 0.1)',
  lg: '0 10px 15px -3px rgba(43, 37, 32, 0.1)',
  xl: '0 20px 25px -5px rgba(43, 37, 32, 0.1)',
} as const;

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const transitions = {
  fast: '150ms ease-out',
  base: '200ms ease-out',
  slow: '300ms ease-out',
  slower: '400ms ease-out',
} as const;

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  offcanvas: 1040,
  modalBackdrop: 1050,
  modal: 1060,
  popover: 1070,
  tooltip: 1080,
} as const;
