import Image from 'next/image';
import { Card } from '../ui/Card';

export interface Testimonial {
  id: string;
  name: string;
  title?: string;
  content: string;
  image?: string;
  category?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full">
      {testimonial.image && (
        <div className="mb-4 w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
      )}
      <div className="flex-1 mb-4">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-golden-sun text-lg">
              ★
            </span>
          ))}
        </div>
        <p className="text-deep-olive italic leading-relaxed">
          "{testimonial.content}"
        </p>
      </div>
      <div>
        <p className="font-serif font-bold text-charcoal-brown">
          {testimonial.name}
        </p>
        {testimonial.title && (
          <p className="text-soft-clay text-sm">{testimonial.title}</p>
        )}
      </div>
    </Card>
  );
}
