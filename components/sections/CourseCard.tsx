import { Card } from '../ui/Card';

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  price: string;
  image?: string;
  students?: number;
  rating?: number;
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const levelLabel = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  };

  return (
    <Card className="group hover:shadow-xl transition-all overflow-hidden flex flex-col">
      {course.image && (
        <div className="overflow-hidden h-48 bg-warm-sand mb-4">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 bg-warm-sand text-deep-olive rounded">
            {levelLabel[course.level]}
          </span>
        </div>

        <h3 className="text-lg font-serif font-bold text-charcoal-brown group-hover:text-soft-clay transition-colors">
          {course.title}
        </h3>

        <p className="text-deep-olive leading-relaxed text-sm">{course.description}</p>

        {course.rating && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < Math.round(course.rating!) ? 'text-golden-sun' : 'text-warm-sand'}
              >
                ★
              </span>
            ))}
            {course.students && (
              <span className="text-xs text-sage ml-2">({course.students})</span>
            )}
          </div>
        )}

        <div className="flex justify-between items-center pt-3 border-t border-warm-sand">
          <span className="font-medium text-deep-olive text-sm">{course.duration}</span>
          <span className="text-lg font-bold text-charcoal-brown">{course.price}</span>
        </div>
      </div>

      <a href={`/online-courses/${course.slug}`} className="btn btn-outline w-full mt-4">
        View Course
      </a>
    </Card>
  );
}
