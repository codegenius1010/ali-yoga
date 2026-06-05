'use client';

interface FeaturedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function FeaturedImage({ src, alt, className = '' }: FeaturedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src =
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"%3E%3Crect fill="%23E8D8C3" width="1200" height="630"/%3E%3C/svg%3E';
      }}
    />
  );
}
