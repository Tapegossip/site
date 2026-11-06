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
}

/** A Book with the fields the UI needs filled in. */
export interface LibraryItem extends Book {
  id: string;
  type: MediaType;
}
