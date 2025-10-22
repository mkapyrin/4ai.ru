/**
 * SEO Utilities for Dynamic Meta Tags
 * Решение проблемы дублированного контента в SPA
 */

// SEO конфигурация для каждой страницы
export const pageSEOConfig = {
  '/': {
    title: 'Тантра Москва - Семинары, Ретриты и Практики | Центр Ресурсные',
    description: 'Тантрические практики Москва: семинары, ретриты, телесная терапия. Центр Ресурсные - место, где тело снова доверяет близости. Запись онлайн.',
    keywords: 'тантра москва, тантрические практики, семинары тантра, ретриты, телесная терапия, тантра-терапия, центр ресурсные, тантрические практики москва',
    canonical: 'https://4ai.ru',
    ogType: 'website'
  },
  '/about': {
    title: 'О Центре Ресурсные - Ведущие тантрических практик в Москве',
    description: '👥 О центре Ресурсные: пространство тантрических практик с 2009 года. Основатели Михаил Капырин (Mike Azal) - психолог-сексолог, DJ экстатик дэнс, и Наталья Белогорцева (Nartaka) - тантра-терапевт. 15+ лет опыта.',
    keywords: 'центр ресурсные, mike azal, nartaka, михаил капырин, наталья белогорцева, преподаватели тантра москва, телесный терапевт москва, йога-терапевт, психолог-сексолог, тантрические практики преподаватели',
    canonical: 'https://4ai.ru/about',
    ogType: 'website'
  },
  '/practices': {
    title: 'Тантрические Практики - Регулярные Занятия и Интенсивы | Центр Ресурсные',
    description: '🎯 Тантрические практики в Москве: регулярная тантра, парная терапия, индивидуальные сессии, ретриты и семинары. Мягкий подход к исцелению близости.',
    keywords: 'тантрические практики, регулярная тантра, парная терапия, индивидуальные сессии, тантра москва, ретриты тантра, семинары тантра, тантрические практики москва',
    canonical: 'https://4ai.ru/practices',
    ogType: 'website'
  },
  '/practices/regular-tantra': {
    title: 'Регулярная Тантра - Групповые Занятия в Москве | Центр Ресурсные',
    description: '🔄 Регулярная тантра в Москве: еженедельные групповые занятия по средам 19:30-22:00. Дыхательные практики, парная работа, безопасное пространство для исцеления близости.',
    keywords: 'регулярная тантра, групповые занятия тантра, тантра среда, дыхательные практики, парная работа, тантра москва, групповые практики тантра',
    canonical: 'https://4ai.ru/practices/regular-tantra',
    ogType: 'website'
  },
  '/practices/individual-sessions': {
    title: 'Индивидуальные Сессии Тантра-Терапии | Центр Ресурсные',
    description: '👤 Индивидуальные сессии тантра-терапии в Москве: персональный подход к исцелению близости, работа с травмами, развитие чувственности. Запись к Nartaka.',
    keywords: 'индивидуальные сессии тантра, тантра-терапия, персональные занятия, исцеление близости, работа с травмами, развитие чувственности, nartaka, тантра москва',
    canonical: 'https://4ai.ru/practices/individual-sessions',
    ogType: 'website'
  },
  '/practices/couple-therapy': {
    title: 'Парная Тантра-Терапия - Работа с Отношениями | Центр Ресурсные',
    description: '💑 Парная тантра-терапия в Москве: работа с отношениями, восстановление близости, исцеление сексуальности. Индивидуальный подход для каждой пары.',
    keywords: 'парная тантра-терапия, работа с отношениями, восстановление близости, исцеление сексуальности, тантра для пар, парная терапия, тантра москва',
    canonical: 'https://4ai.ru/practices/couple-therapy',
    ogType: 'website'
  },
  '/practices/workshops': {
    title: 'Ретриты и Семинары Тантра - Интенсивы в Москве | Центр Ресурсные',
    description: '🌟 Ретриты и семинары тантра в Москве: интенсивы выходного дня, погружения в тантрические практики, трансформационные программы. Расписание событий.',
    keywords: 'ретриты тантра, семинары тантра, интенсивы тантра, тантрические ретриты, трансформационные программы, тантра москва, тантрические семинары',
    canonical: 'https://4ai.ru/practices/workshops',
    ogType: 'website'
  },
  '/blog': {
    title: 'Блог о Тантрических Практиках и Телесной Терапии | Центр Ресурсные',
    description: '📝 Блог о тантрических практиках, телесной терапии и исцелении близости. Статьи от экспертов Центра Ресурсные: Mike Azal и Nartaka.',
    keywords: 'блог тантра, статьи тантра, тантрические практики блог, телесная терапия, исцеление близости, mike azal блог, nartaka статьи, тантра москва блог',
    canonical: 'https://4ai.ru/blog',
    ogType: 'website'
  },
  '/contact': {
    title: 'Контакты Центра Ресурсные - Запись на Тантрические Практики | 4ai.ru',
    description: '📞 Контакты Центра Ресурсные: запись на тантрические практики в Москве. Телефон, Telegram, адрес. Свяжитесь с Mike Azal и Nartaka для записи.',
    keywords: 'контакты центр ресурсные, запись тантра, тантра москва контакты, mike azal контакты, nartaka запись, тантрические практики запись',
    canonical: 'https://4ai.ru/contact',
    ogType: 'website'
  },
  '/test': {
    title: 'Тест Тантрической Личности - Определите Ваш Архетип | Центр Ресурсные',
    description: '🔮 Тест тантрической личности: определите ваш архетип и получите персональные рекомендации по тантрическим практикам. Бесплатный тест от экспертов.',
    keywords: 'тест тантрической личности, архетип тантра, тест личности, тантрический архетип, тест близости, персональные рекомендации тантра',
    canonical: 'https://4ai.ru/test',
    ogType: 'website'
  }
};

/**
 * Обновляет мета-теги для текущей страницы
 * @param {string} pathname - путь страницы
 */
export const updatePageSEO = (pathname) => {
  const seoConfig = pageSEOConfig[pathname] || pageSEOConfig['/'];
  
  // Обновляем title
  document.title = seoConfig.title;
  
  // Обновляем meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', seoConfig.description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = seoConfig.description;
    document.head.appendChild(meta);
  }
  
  // Обновляем keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', seoConfig.keywords);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content = seoConfig.keywords;
    document.head.appendChild(meta);
  }
  
  // Обновляем canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = seoConfig.canonical;
  
  // Обновляем Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.content = seoConfig.title;
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.content = seoConfig.description;
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.content = seoConfig.canonical;
  }
  
  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) {
    ogType.content = seoConfig.ogType || 'website';
  }
  
  // Обновляем Twitter Cards
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.content = seoConfig.title;
  }
  
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.content = seoConfig.description;
  }
  
  // Логируем для отладки
  console.log(`SEO updated for ${pathname}:`, {
    title: seoConfig.title,
    description: seoConfig.description.substring(0, 100) + '...',
    canonical: seoConfig.canonical
  });
};

/**
 * Инициализирует SEO для всех страниц
 * Вызывается в AppNew.jsx при изменении роута
 */
export const initSEO = () => {
  // Обновляем SEO для текущей страницы
  updatePageSEO(window.location.pathname);
  
  // Отправляем событие в Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

/**
 * Создает JSON-LD структурированные данные для страницы
 * @param {string} pathname - путь страницы
 * @param {object} additionalData - дополнительные данные
 */
export const generateStructuredData = (pathname, additionalData = {}) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Центр Ресурсные',
    'url': 'https://4ai.ru',
    'logo': 'https://4ai.ru/images/logo-resursnie-orig2.webp',
    'description': 'Центр тантрических практик и телесной терапии в Москве',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Москва',
      'addressCountry': 'RU'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+7-926-123-45-67',
      'contactType': 'customer service',
      'availableLanguage': 'Russian'
    }
  };
  
  // Добавляем специфичные данные для разных страниц
  switch (pathname) {
    case '/':
      return {
        ...baseData,
        '@type': 'LocalBusiness',
        'serviceArea': {
          '@type': 'City',
          'name': 'Москва'
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Тантрические практики',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Регулярная тантра',
                'description': 'Групповые занятия по средам'
              }
            }
          ]
        }
      };
    case '/about':
      return {
        ...baseData,
        'founder': [
          {
            '@type': 'Person',
            'name': 'Михаил Капырин',
            'jobTitle': 'Психолог-сексолог, DJ экстатик дэнс'
          },
          {
            '@type': 'Person',
            'name': 'Наталья Белогорцева',
            'jobTitle': 'Тантра-терапевт'
          }
        ]
      };
    default:
      return baseData;
  }
};

/**
 * Вставляет структурированные данные в head
 * @param {object} structuredData - данные для вставки
 */
export const insertStructuredData = (structuredData) => {
  // Удаляем старые структурированные данные
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Создаем новые
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};
