'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { trackFaqExpand } from '@/utils/analytics';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FearsFAQProps {
  questions?: FAQItem[] | null;
  className?: string;
}

const FearsFAQ: React.FC<FearsFAQProps> = ({ questions = null, className = '' }) => {
  // Default FAQ content from PRD
  const defaultQuestions: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Вдруг станет неловко?',
      answer: 'Есть паузы и язык жестов «стоп/медленнее/да». Всегда можно остановиться.'
    },
    {
      id: 'faq-2',
      question: 'Что, если заплачу?',
      answer: 'Слёзы - это тоже тепло. Мы держим пространство и дышим вместе.'
    },
    {
      id: 'faq-3',
      question: 'А если партнёру не понравится?',
      answer: 'Начинаем с того темпа, где обоим спокойно. Без давления.'
    },
    {
      id: 'faq-4',
      question: 'Это какие-то странные ритуалы?',
      answer: 'Только мягкие шаги. Без того, что вам не подходит.'
    }
  ];

  const faqItems = questions || defaultQuestions;

  const handleAccordionChange = (value: string) => {
    if (value) {
      const item = faqItems.find(item => item.id === value);
      trackFaqExpand(value, item?.question || '');
    }
  };

  return (
    <div className={`max-w-3xl mx-auto ${className}`}>
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
        О страхах и сомнениях
      </h3>
      <p className="text-center mb-8 text-lg" style={{ color: 'var(--text-secondary)' }}>
        Мы понимаем ваши переживания. Вот честные ответы на частые вопросы
      </p>
      
      <Accordion
        type="single"
        collapsible
        className="space-y-4"
        onValueChange={handleAccordionChange}
      >
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            style={{ backgroundColor: '#faf9f7' }}
          >
            <AccordionTrigger
              className="px-6 py-4 text-lg font-medium hover:no-underline"
              style={{ color: 'var(--text-primary)' }}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-base" style={{ color: 'var(--text-secondary)' }}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default FearsFAQ;
