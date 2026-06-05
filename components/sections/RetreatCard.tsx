import { Card } from '../ui/Card';

export interface Retreat {
  id: string;
  name: string;
  slug: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  price: string;
  image?: string;
  attendees?: number;
  maxAttendees?: number;
}

interface RetreatCardProps {
  retreat: Retreat;
}

export function RetreatCard({ retreat }: RetreatCardProps) {
  const startDate = new Date(retreat.startDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const endDate = new Date(retreat.endDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  const capacity = retreat.attendees && retreat.maxAttendees
    ? Math.round((retreat.attendees / retreat.maxAttendees) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-xl transition-all overflow-hidden">
      {retreat.image && (
        <div className="overflow-hidden h-48 bg-warm-sand mb-4">
          <img
            src={retreat.image}
            alt={retreat.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="space-y-3">
        <h3 className="text-xl font-serif font-bold text-charcoal-brown group-hover:text-soft-clay transition-colors">
          {retreat.name}
        </h3>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-deep-olive">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {retreat.location}
          </div>

          <div className="flex items-center gap-2 text-deep-olive">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {startDate} – {endDate}
          </div>
        </div>

        <p className="text-deep-olive leading-relaxed text-sm">{retreat.description}</p>

        {capacity > 0 && (
          <div className="pt-2">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-sage">Capacity</span>
              <span className="font-semibold text-soft-clay">{capacity}% full</span>
            </div>
            <div className="w-full h-2 bg-warm-sand rounded-full overflow-hidden">
              <div
                className="h-full bg-soft-clay transition-all"
                style={{ width: `${capacity}%` }}
              />
            </div>
          </div>
        )}

        <div className="pt-3 border-t border-warm-sand flex justify-between items-center">
          <span className="text-lg font-bold text-charcoal-brown">{retreat.price}</span>
          <a href={`/retreats/${retreat.slug}`} className="btn btn-primary btn-small">
            Learn More
          </a>
        </div>
      </div>
    </Card>
  );
}
