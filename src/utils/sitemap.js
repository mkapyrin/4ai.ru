// Sitemap generation utility
export const generateSitemap = () => {
  const baseUrl = 'https://4ai.ru';
  const currentDate = new Date().toISOString().split('T')[0];

  const pages = [
    {
      url: '',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate
    },
    {
      url: '/practices',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: '/practices/regular-tantra',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/practices/workshops',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/practices/couple-therapy',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    },
    {
      url: '/practices/individual-sessions',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    },
    {
      url: '/events',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/blog',
      changefreq: 'weekly',
      priority: '0.7',
      lastmod: currentDate
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: currentDate
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.5',
      lastmod: currentDate
    },
    {
      url: '/resources',
      changefreq: 'monthly',
      priority: '0.4',
      lastmod: currentDate
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

export const generateRobotsTxt = () => {
  const baseUrl = 'https://4ai.ru';

  return `User-agent: *
Allow: /

# Yandex Bot
User-agent: YandexBot
Allow: /

# Google Bot
User-agent: Googlebot
Allow: /

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml`;
};