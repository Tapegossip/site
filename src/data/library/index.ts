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

export * from './types';
