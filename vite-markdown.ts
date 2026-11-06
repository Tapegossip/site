import { marked } from 'marked';
import type { Plugin } from 'vite';
import { essayTagClasses } from './src/data/essays/markdownStyles';

/**
 * Minimal front matter: `key: value` lines between `---` fences.
 * Values: [a, b] lists, numbers, or strings (optionally quoted).
 */
const parseFrontMatter = (source: string) => {
  const m = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {} as Record<string, unknown>, body: source };
  const data: Record<string, unknown> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    const raw = kv[2].trim();
    const unquote = (s: string) => {
      s = s.trim();
      if (/^".*"$/.test(s)) return JSON.parse(s) as string; // double quotes: JSON escapes (\")
      return s.replace(/^'(.*)'$/, '$1');
    };
    data[kv[1]] = raw.startsWith('[')
      ? raw.slice(1, -1).split(',').map(unquote).filter(Boolean)
      : /^-?\d+(\.\d+)?$/.test(raw) ? Number(raw) : unquote(raw);
  }
  return { data, body: source.slice(m[0].length) };
};

/** Markdown → HTML, adding the essay classes to bare tags (`<h2>` → `<h2 class="...">`). */
export const renderEssay = (body: string) => {
  let html = marked.parse(body, { async: false, gfm: true }) as string;
  for (const [tag, cls] of Object.entries(essayTagClasses)) {
    html = html.replace(new RegExp(`<${tag}>`, 'g'), `<${tag} class="${cls}">`);
  }
  return html.trim();
};

/**
 * Imports `*.md` as `{ meta, html }`, converted at build time:
 * no Markdown parser is shipped to the browser.
 */
export default function markdown(): Plugin {
  return {
    name: 'tapegossip-markdown',
    transform(source, id) {
      if (!id.endsWith('.md')) return null;
      const { data, body } = parseFrontMatter(source);
      return {
        code: `export default ${JSON.stringify({ meta: data, html: renderEssay(body) })};`,
        map: null,
      };
    },
  };
}

export { parseFrontMatter };
