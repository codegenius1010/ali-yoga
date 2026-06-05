import Image from 'next/image';
import { Card } from '../ui/Card';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  author: string;
  image?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all">
      {post.image && (
        <div className="overflow-hidden h-48 bg-warm-sand mb-4">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={192}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        </div>
      )}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-soft-clay">
            {post.category}
          </span>
          <span className="text-xs text-sage">{publishDate}</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-charcoal-brown group-hover:text-soft-clay transition-colors">
          {post.title}
        </h3>
        <p className="text-deep-olive leading-relaxed text-sm">{post.excerpt}</p>
        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-soft-clay font-semibold hover:text-soft-clay/80 transition-colors text-sm"
        >
          Read more →
        </a>
      </div>
    </Card>
  );
}
