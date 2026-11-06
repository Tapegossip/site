/** Titles and descriptions per page; used in the browser (tab title) and at build time (vite-pages.ts). */
export const SITE_NAME = 'TapeGossip';
export const SITE_URL = 'https://tapegossip.com';
export const SITE_DESCRIPTION =
  'Essays on markets, risk, and human behavior, plus a personal library of books worth reading.';

export const pageTitle = (name?: string) => (name ? `${name} · ${SITE_NAME}` : SITE_NAME);

/** Static routes (essays add their own from front matter). */
export const staticPages: Record<string, { name?: string; description: string }> = {
  '/': { description: SITE_DESCRIPTION },
  '/essays': { name: 'Essays', description: 'Essays on markets, risk, and human behavior.' },
  '/library': {
    name: 'Library',
    description: 'Books, videos, articles, and websites on markets, history, science, and more.',
  },
};
