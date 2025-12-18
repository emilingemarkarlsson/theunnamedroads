import fs from 'fs';
import path from 'path';

const CONFIG = {
  host: 'theunnamedroads.com',
  key: '741e73bc05ca4ca8b93944e7e9231f99',
  sitemapPath: path.join(process.cwd(), 'dist', 'sitemap-0.xml'), // Astro usually names it sitemap-0.xml
  indexNowApi: 'https://api.indexnow.org/indexnow'
};

async function submitToIndexNow() {
  if (!process.env.NETLIFY && process.env.NODE_ENV !== 'production') {
    console.log('IndexNow: Skipping - Not in production environment.');
    return;
  }

  try {
    if (!fs.existsSync(CONFIG.sitemapPath)) {
      // Try sitemap-index.xml if sitemap-0.xml doesn't exist
      const indexPath = path.join(process.cwd(), 'dist', 'sitemap-index.xml');
      if (!fs.existsSync(indexPath)) {
        console.error('IndexNow: Sitemap not found at', CONFIG.sitemapPath);
        return;
      }
      // If index exists, we'd need to parse it, but for most small sites sitemap-0.xml is the one.
      // Let's just try to read sitemap-index.xml and see if it has URLs
      CONFIG.sitemapPath = indexPath;
    }

    const sitemapContent = fs.readFileSync(CONFIG.sitemapPath, 'utf-8');
    const urlRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
    const urls = [];
    let match;

    while ((match = urlRegex.exec(sitemapContent)) !== null) {
      urls.push(match[1]);
    }

    if (urls.length === 0) {
      console.log('IndexNow: No URLs found in sitemap.');
      return;
    }

    console.log(`IndexNow: Submitting ${urls.length} URLs to IndexNow...`);

    const response = await fetch(CONFIG.indexNowApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        host: CONFIG.host,
        key: CONFIG.key,
        keyLocation: `https://${CONFIG.host}/${CONFIG.key}.txt`,
        urlList: urls
      })
    });

    if (response.ok) {
      console.log('IndexNow: Successfully submitted URLs to IndexNow.');
    } else {
      const errorText = await response.text();
      console.error(`IndexNow: Failed to submit. Status: ${response.status}`, errorText);
    }
  } catch (error) {
    console.error('IndexNow: Error during submission:', error);
  }
}

submitToIndexNow();

