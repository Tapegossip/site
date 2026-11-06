export type MediaType = 'book' | 'article' | 'paper' | 'video' | 'podcast';

/** One entry in books.ts. `type` defaults to 'book' when omitted. */
export interface Book {
  title: string;
  author: string;
  publishedYear: number;
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
