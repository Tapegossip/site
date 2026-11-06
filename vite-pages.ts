import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import type { Plugin } from 'vite';
import { parseFrontMatter } from './vite-markdown';
import { SITE_URL, pageTitle, staticPages } from './src/lib/pageMeta';

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Copy of the built index.html with this page's title, description, and URL. */
const pageHtml = (html: string, p: { route: string; title: string; description: string; type?: string; noindex?: boolean }) => {
  const url = SITE_URL + (p.route === '/' ? '/' : p.route);
  const t = escapeAttr(p.title), d = escapeAttr(p.description);
  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`);
  if (p.type) out = out.replace(/(<meta property="og:type" content=")[^"]*/, `$1${p.type}`);
  if (p.noindex) out = out.replace('</head>', '    <meta name="robots" content="noindex" />\n</head>');
  return out;
};

/**
 * GitHub Pages serves files, not routes. After the build, write one HTML file per route
 * (library.html, essays.html, essay/<slug>.html) so each URL loads directly with its own
 * title and description, plus 404.html so unknown URLs still load the app (which shows its 404 page).
 */
export default function routePages(): Plugin {
  return {
    name: 'tapegossip-route-pages',
    apply: 'build',
    enforce: 'post', // run after Vite has emitted index.html
    generateBundle(_options, bundle) {
      const index = bundle['index.html'];
      if (!index || index.type !== 'asset') return;
      const html = String(index.source);
      const emit = (fileName: string, source: string) => this.emitFile({ type: 'asset', fileName, source });

      // Home keeps index.html; give it the canonical home metadata too.
      index.source = pageHtml(html, { route: '/', title: pageTitle(), description: staticPages['/'].description });

      for (const [route, meta] of Object.entries(staticPages)) {
        if (route === '/') continue;
        emit(`${route.slice(1)}.html`, pageHtml(html, { route, title: pageTitle(meta.name), description: meta.description }));
      }

      const essayDir = path.resolve(__dirname, 'src/data/essays');
      for (const file of readdirSync(essayDir).filter(f => f.endsWith('.md'))) {
        const { data } = parseFrontMatter(readFileSync(path.join(essayDir, file), 'utf8'));
        const slug = file.replace(/\.md$/, '');
        const description = String(data.subtitle || data.excerpt || '');
        emit(`essay/${slug}.html`, pageHtml(html, {
          route: `/essay/${slug}`, title: pageTitle(String(data.title)), description, type: 'article',
        }));
      }

      emit('404.html', pageHtml(html, { route: '/', title: pageTitle('Page not found'), description: staticPages['/'].description, noindex: true }));
    },
  };
}
