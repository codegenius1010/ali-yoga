'use client';

import { useState } from 'react';
import clsx from 'clsx';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpen?: string;
}

export function FAQAccordion({ items, defaultOpen }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen || null);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border border-warm-sand rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-cream transition-colors"
          >
            <h3 className="font-serif font-bold text-charcoal-brown pr-4">
              {item.question}
            </h3>
            <svg
              className={clsx(
                'flex-shrink-0 w-5 h-5 text-soft-clay transition-transform duration-200',
                openId === item.id && 'rotate-180'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {openId === item.id && (
            <div className="px-6 py-4 bg-cream text-deep-olive border-t border-warm-sand animate-slide-up">
              <p className="leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
