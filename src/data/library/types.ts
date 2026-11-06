
export type MediaType = 'book' | 'article' | 'paper' | 'video' | 'podcast';

export interface LibraryItem {
  id: string;
  title: string;
  author: string;
  publishedYear: number;
  link: string;
  tags: string[];
  type: MediaType;
  description?: string;
}

// Utility functions to get all unique tags and media types
export const getAllTags = (items: LibraryItem[]): string[] => {
  const tagsSet = new Set<string>();
  items.forEach(item => {
    item.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

export const getAllMediaTypes = (items: LibraryItem[]): MediaType[] => {
  const typesSet = new Set<MediaType>();
  items.forEach(item => {
    typesSet.add(item.type);
  });
  return Array.from(typesSet).sort();
};
