
import { LibraryItem, getAllTags, getAllMediaTypes } from './types';
import { philosophyBooks } from './philosophy-books';
import { financeBooks } from './finance';  // Updated import
import { scienceBooks } from './science-books';
import { technologyBooks } from './technology-books';
import { businessBooks } from './business-books';
import { selfImprovementBooks } from './self-improvement-books';
import { fictionBooks } from './fiction-books';
import { mathematicsBooks } from './mathematics-books';
import { historyBooks } from './history-books';
import { psychologyBooks } from './psychology-books';
import { physicsBooks } from './physics-books';
import { astronomyBooks } from './astronomy-books';
import { biologyBooks } from './biology-books';
import { geographyBooks } from './geography-books';
import { politicsBooks } from './politics-books';
import { engineeringBooks } from './engineering-books';
import { sociologyBooks } from './sociology-books';
import { miscellaneousBooks } from './miscellaneous-books'; // New import

// Combine all book categories
export const libraryItems: LibraryItem[] = [
  ...philosophyBooks,
  ...financeBooks,
  ...scienceBooks,
  ...technologyBooks,
  ...businessBooks,
  ...selfImprovementBooks,
  ...fictionBooks,
  ...mathematicsBooks,
  ...historyBooks,
  ...psychologyBooks,
  ...physicsBooks,
  ...astronomyBooks,
  ...biologyBooks,
  ...geographyBooks,
  ...politicsBooks,
  ...engineeringBooks,
  ...sociologyBooks,
  ...miscellaneousBooks
];

// Check for duplicate IDs and remove them
const uniqueItems: LibraryItem[] = [];
const seenIds = new Set<string>();

libraryItems.forEach(item => {
  if (!seenIds.has(item.id)) {
    seenIds.add(item.id);
    uniqueItems.push(item);
  } else {
    console.warn(`Duplicate book ID found: ${item.id} - ${item.title}`);
  }
});

// Export the de-duplicated list
export const dedupedLibraryItems = uniqueItems;

// Export derived data
export const allTags = getAllTags(dedupedLibraryItems);
export const allMediaTypes = getAllMediaTypes(dedupedLibraryItems);

// Re-export types and utilities
export * from './types';
