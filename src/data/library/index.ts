import booksData from './books.json';
import linksData from './links.json';
import type { Book, LibraryItem, MediaType, SearchIndex } from './types';

// Data lives in JSON so scripts/library.py can add items; see that script for the workflow.
const books = booksData as Book[];
const links = linksData as Book[];

/** Must match slug() in scripts/library.py: ids key the search index. */
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Full-text search words, fetched only when someone starts searching. */
export const loadSearchIndex = (): Promise<SearchIndex> =>
  import('./search-index.json').then(m => m.default as SearchIndex);

export const libraryItems: LibraryItem[] = [...books, ...links].map(item => ({
  ...item,
  id: slug(`${item.title}-${item.author}`),
  type: item.type ?? 'book',
}));

/** Categories in the order they first appear. */
export const allCategories: string[] = [...new Set(libraryItems.map(b => b.category))];

/** Tab order and labels; tabs with no items are hidden. */
export const mediaTypes: { type: MediaType; label: string }[] = [
  { type: 'book', label: 'Books' },
  { type: 'article', label: 'Articles' },
  { type: 'video', label: 'Videos' },
  { type: 'website', label: 'Websites' },
  { type: 'paper', label: 'Papers' },
  { type: 'podcast', label: 'Podcasts' },
];

/** YouTube video ID from a youtu.be / youtube.com URL, or null. */
export const youtubeId = (url: string): string | null => {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
};

export * from './types';
