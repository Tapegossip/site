
import { LibraryItem, getAllTags, getAllMediaTypes } from './types';
import { masterBookList } from './master-list';

// Export the master list as the primary source of library items
export const libraryItems: LibraryItem[] = masterBookList;

// No need to check for duplicates since the master list should not have any
export const dedupedLibraryItems = libraryItems;

// Export derived data
export const allTags = getAllTags(libraryItems);
export const allMediaTypes = getAllMediaTypes(libraryItems);

// Re-export types and utilities
export * from './types';
