const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

// Define your website's base URL
const BASE_URL = 'https://yourwebsite.com';

// Define your routes (match these with your App.js routes)
const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  // Add more routes as needed
];

(async () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  
  routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 });
  });
  
  sitemap.end();
  
  const sitemapData = await streamToPromise(sitemap);
  
  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemapData.toString());
  console.log('Sitemap generated at public/sitemap.xml');
})();
