'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { trackTestimonialView } from '@/utils/analytics';

interface Testimonial {
  id: string;
  before: string;
  after: string;
  author: string;
}

interface EmotionalTestimonialsProps {
  className?: string;
}

const EmotionalTestimonials: React.FC<EmotionalTestimonialsProps> = ({ className = '' }) => {
  const testimonials: Testimonial[] = [
    {
      id: 'testimonial-1',
      before: 'Дрожь в груди',
      after: 'Теплота под ключицами',
      author: 'А., 34, пара'
    },
    {
      id: 'testimonial-2',
      before: 'Ком в горле',
      after: 'Ровный выдох',
      author: 'М., 41, индивидуально'
    },
    {
      id: 'testimonial-3',
      before: '«Я отдельно»',
      after: '«Нас двое»',
      author: 'Е. и Д., 28/32, пара'
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTracked, setHasTracked] = useState(false);
  const [viewStartTime, setViewStartTime] = useState<number | null>(null);

  // Intersection Observer for view tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Track start time
          if (!viewStartTime) {
            setViewStartTime(Date.now());
          }
          
          // Track view event after 2 seconds
          if (!hasTracked) {
            setTimeout(() => {
              const duration = Math.floor((Date.now() - (viewStartTime || Date.now())) / 1000);
              trackTestimonialView(testimonials.length, Math.max(duration, 2));
              setHasTracked(true);
            }, 2000);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasTracked, viewStartTime, testimonials.length]);

  return (
    <div ref={sectionRef} className={`max-w-6xl mx-auto ${className}`}>
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
        Что меняется в теле
      </h3>
      <p className="text-center mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
        Не обещания, а реальные телесные ощущения наших клиентов
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100"
            style={{ backgroundColor: '#faf9f7' }}
          >
            <div className="space-y-4">
              {/* Before State */}
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">До</p>
                <p className="text-lg font-medium text-gray-700">{testimonial.before}</p>
              </div>

              {/* Arrow with pulse */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>

              {/* After State */}
              <div className="text-center">
                <p className="text-sm text-purple-500 mb-2 font-medium">После</p>
                <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {testimonial.after}
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">{testimonial.author}</p>
              </div>
            </div>

            {/* Review Schema Markup */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Review',
                  itemReviewed: {
                    '@type': 'LocalBusiness',
                    name: 'Центр Ресурсные'
                  },
                  reviewBody: `До: ${testimonial.before}. После: ${testimonial.after}`,
                  author: {
                    '@type': 'Person',
                    name: testimonial.author.split(',')[0]
                  }
                })
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionalTestimonials;
