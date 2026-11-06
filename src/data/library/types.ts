export type MediaType = 'book' | 'article' | 'paper' | 'video' | 'podcast' | 'website';

/** One entry in books.ts. `type` defaults to 'book' when omitted. */
export interface Book {
  title: string;
  author: string;
  /** Omit when unknown. Negative numbers are BC. */
  publishedYear?: number;
  category: string;
  tags: string[];
  link: string;
  type?: MediaType;
  description?: string;
  /** Extra searchable words (e.g. what you'll remember it by). Never displayed. */
  note?: string;
}

/** search-index.json: words from transcripts / article text / book subjects, keyed by item id. */
export interface SearchIndexEntry {
  /** Where the words came from: transcript, description, article, site, paper, catalog, none. */
  src: string;
  /** Space-separated distinct words. */
  w: string;
}
export type SearchIndex = Record<string, SearchIndexEntry>;

/** A Book with the fields the UI needs filled in. */
export interface LibraryItem extends Book {
  id: string;
  type: MediaType;
}
