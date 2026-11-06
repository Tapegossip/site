import { useState, useMemo } from 'react';
import type { LibraryItem } from '../data/library';

/** Text search (title, author, category, and the hidden tags) plus a category filter. */
export function useSearch(items: LibraryItem[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return items.filter(item =>
      (q === '' ||
        item.title.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q))) &&
      (selectedCategories.length === 0 || selectedCategories.includes(item.category))
    );
  }, [items, searchQuery, selectedCategories]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategories,
    filteredItems,
    toggleCategory: (c: string) =>
      setSelectedCategories(prev => (prev.includes(c) ? prev.filter(v => v !== c) : [...prev, c])),
    clearSelections: () => setSelectedCategories([]),
    clearFilters: () => {
      setSelectedCategories([]);
      setSearchQuery('');
    },
  };
}
