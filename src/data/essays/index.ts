/**
 * Essays are Markdown files in this folder (file name = URL slug), with front matter:
 *   ---
 *   title: ...            subtitle: ... (optional)
 *   date: 2025-03-28      order: 1 (position in lists)
 *   tags: [a, b]          excerpt: "..."
 *   ---
 * They are converted to HTML at build time (vite-markdown.ts).
 */
export interface Essay {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  order: number;
  tags: string[];
  excerpt: string;
  html: string;
}

interface EssayModule {
  default: { meta: Omit<Essay, 'slug' | 'html'>; html: string };
}

const modules = import.meta.glob<EssayModule>('./*.md', { eager: true });

export const essays: Essay[] = Object.entries(modules)
  .map(([path, mod]) => ({
    ...mod.default.meta,
    slug: path.replace(/^\.\/|\.md$/g, ''),
    html: mod.default.html,
  }))
  .sort((a, b) => a.order - b.order);
