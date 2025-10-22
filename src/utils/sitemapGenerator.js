/**
 * Sitemap Generator for Dynamic Pages
 * Генерирует sitemap.xml для улучшения индексации
 */

// Статические страницы сайта
export const staticPages = [
  {
    url: 'https://4ai.ru',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: 'https://4ai.ru/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: 'https://4ai.ru/practices',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: 'https://4ai.ru/practices/regular-tantra',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: 'https://4ai.ru/practices/individual-sessions',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: 'https://4ai.ru/practices/couple-therapy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: 'https://4ai.ru/practices/workshops',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: 'https://4ai.ru/blog',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '0.7'
  },
  {
    url: 'https://4ai.ru/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: 'https://4ai.ru/test',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: 'https://4ai.ru/privacy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    url: 'https://4ai.ru/terms',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    url: 'https://4ai.ru/offer',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.3'
  }
];

/**
 * Генерирует XML sitemap
 * @param {Array} pages - массив страниц
 * @returns {string} XML sitemap
 */
export const generateSitemapXML = (pages = staticPages) => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urls = pages.map(page => {
    return `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');
  
  return `${xmlHeader}
${urlsetOpen}
${urls}
${urlsetClose}`;
};

/**
 * Создает и сохраняет sitemap.xml в public директории
 * Вызывается при сборке проекта
 */
export const createSitemapFile = () => {
  if (typeof window === 'undefined') {
    // Только на сервере/при сборке
    const fs = require('fs');
    const path = require('path');
    
    const sitemapXML = generateSitemapXML();
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    
    try {
      fs.writeFileSync(sitemapPath, sitemapXML, 'utf8');
      console.log('✅ Sitemap.xml generated successfully');
    } catch (error) {
      console.error('❌ Error generating sitemap.xml:', error);
    }
  }
};

/**
 * Обновляет sitemap для динамических страниц (например, блог посты)
 * @param {Array} dynamicPages - динамические страницы
 */
export const updateSitemapWithDynamicPages = (dynamicPages = []) => {
  const allPages = [...staticPages, ...dynamicPages];
  return generateSitemapXML(allPages);
};

/**
 * Проверяет актуальность sitemap
 */
export const validateSitemap = () => {
  const sitemap = generateSitemapXML();
  
  // Проверяем, что все URL валидны
  const urlRegex = /https?:\/\/[^\s<>"{}|\\^`[\]]+/g;
  const urls = sitemap.match(urlRegex) || [];
  
  const invalidUrls = urls.filter(url => {
    try {
      new URL(url);
      return false;
    } catch {
      return true;
    }
  });
  
  if (invalidUrls.length > 0) {
    console.warn('⚠️ Invalid URLs in sitemap:', invalidUrls);
    return false;
  }
  
  console.log(`✅ Sitemap validation passed: ${urls.length} URLs`);
  return true;
};

/**
 * Отправляет sitemap в поисковые системы
 */
export const submitSitemapToSearchEngines = () => {
  const sitemapUrl = 'https://4ai.ru/sitemap.xml';
  
  // Google Search Console
  console.log(`📤 Submit to Google: https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
  
  // Yandex Webmaster
  console.log(`📤 Submit to Yandex: https://webmaster.yandex.ru/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
  
  // Bing Webmaster
  console.log(`📤 Submit to Bing: https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
};

// Автоматически генерируем sitemap при импорте в build процессе
if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
  createSitemapFile();
  validateSitemap();
}
