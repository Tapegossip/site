import { books } from './books';
import type { LibraryItem } from './types';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const libraryItems: LibraryItem[] = books.map(book => ({
  ...book,
  id: slug(`${book.title}-${book.author}`),
  type: book.type ?? 'book',
}));

/** Categories in the order they appear in books.ts. */
export const allCategories: string[] = [...new Set(books.map(b => b.category))];

/** Tags shared by at least MIN_TAG_USES books (one-off tags only add noise to the filter list). */
const MIN_TAG_USES = 3;
const tagCounts = new Map<string, number>();
books.forEach(b => b.tags.forEach(t => tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1)));
export const filterTags: string[] = [...tagCounts]
  .filter(([, n]) => n >= MIN_TAG_USES)
  .map(([t]) => t)
  .sort();

export * from './types';
